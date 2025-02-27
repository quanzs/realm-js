////////////////////////////////////////////////////////////////////////////
//
// Copyright 2020 Realm Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
////////////////////////////////////////////////////////////////////////////

const { EJSON } = require("bson");

const { promisify } = require("./utils.js");

const instanceMethods = {
  registerUser(email, password) {
    return promisify((cb) => this._registerUser(email, password, cb));
  },

  confirmUser(token, token_id) {
    return promisify((cb) => this._confirmUser(token, token_id, cb));
  },

  resendConfirmationEmail(email) {
    return promisify((cb) => this._resendConfirmationEmail(email, cb));
  },

  retryCustomConfirmation(email) {
    return promisify((cb) => this._retryCustomConfirmation(email, cb));
  },

  sendResetPasswordEmail(email) {
    return promisify((cb) => this._sendResetPasswordEmail(email, cb));
  },

  resetPassword(password, token, token_id) {
    return promisify((cb) => this._resetPassword(password, token, token_id, cb));
  },

  callResetPasswordFunction(email, password, ...args) {
    const stringifiedArgs = EJSON.stringify(args, { relaxed: false });
    return promisify((cb) => this._callResetPasswordFunction(email, password, stringifiedArgs, cb));
  },
};

const staticMethods = {
  // none
};

module.exports = {
  static: staticMethods,
  instance: instanceMethods,
};
