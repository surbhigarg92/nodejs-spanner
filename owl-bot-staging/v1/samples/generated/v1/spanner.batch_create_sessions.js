// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(database, sessionCount) {
  // [START spanner_batch_create_sessions_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The database in which the new sessions are created.
   */
  // const database = 'abc123'
  /**
   *  Parameters to be applied to each created session.
   */
  // const sessionTemplate = ''
  /**
   *  Required. The number of sessions to be created in this batch call.
   *  The API may return fewer than the requested number of sessions. If a
   *  specific number of sessions are desired, the client can make additional
   *  calls to BatchCreateSessions (adjusting
   *  [session_count][google.spanner.v1.BatchCreateSessionsRequest.session_count] as necessary).
   */
  // const sessionCount = 1234

  // Imports the Spanner library
  const {SpannerClient} = require('@google-cloud/spanner').v1;

  // Instantiates a client
  const spannerClient = new SpannerClient();

  async function batchCreateSessions() {
    // Construct request
    const request = {
      database,
      sessionCount,
    };

    // Run request
    const response = await spannerClient.batchCreateSessions(request);
    console.log(response);
  }

  batchCreateSessions();
  // [END spanner_batch_create_sessions_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));