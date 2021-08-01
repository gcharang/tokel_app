/* eslint-disable no-console */
import { spawn } from 'child_process';
import path from 'path';
import os from 'os';
import { SIGINT } from 'constants';

import { OsType } from '../vars/defines';

const { app } = require('electron');

const RECONNECT_TIMES = 6;

const binariesDir =
  process.env.NODE_ENV === 'development'
    ? path.join(app.getAppPath(), '..', '..', 'include', 'binaries')
    : path.join(app.getAppPath(), '..', 'binaries');

const getBinaryName = () => {
  console.log(os.type());
  switch (os.type()) {
    case OsType.MAC:
      return 'komodod-mac';
    case OsType.LINUX:
      return 'komodod-linux';
    default:
      return 'komodod.exe';
  }
};

const cwd = path.join(binariesDir, 'komodo');
class KomododInstance {
  constructor(params) {
    if (process.env.NODE_ENV === 'test') {
      return 'singleton created';
    }
    this.params = params;
    this.binName = getBinaryName();
    this.connect();
    this.reconnected = 0;
  }

  connect() {
    console.log('Starting a new komodod process in the background.');
    this.komodod = spawn(path.join(cwd, this.binName), this.params, { cwd });
    this.komodod.stdout.setEncoding('utf8');

    this.komodod.stdout.on('data', data => {
      console.log('------', data);
    });

    this.komodod.stderr.on('data', err => {
      console.error(`stderr: ${err}`);
    });

    this.komodod.on('exit', code => {
      console.log('exit', code);
      if (!this.nukeit && this.reconnected < RECONNECT_TIMES) {
        setTimeout(() => {
          this.connect();
          this.reconnected += 1;
        }, 10000);
      }
    });
  }

  get() {
    return this.komodod;
  }

  cleanup() {
    console.log('SIGINT by the app');
    this.nukeit = true;
    this.komodod.kill(SIGINT);
  }
}

// const komodod = new KomododInstance();

export default KomododInstance;