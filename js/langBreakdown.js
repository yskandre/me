/*jshint -W033 */
import { request } from "https://cdn.pika.dev/@octokit/request";

myAsyncMethod();

async function myAsyncMethod() {
    const result = await request("GET /repos/yskandre");
    console.log(result.data);
}