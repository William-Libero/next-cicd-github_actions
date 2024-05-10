import { execSync } from "child_process";
import { encode } from "punycode";

console.log("[DEPLOY_PREVIEW]: START");
const command = "yarn deploy:staging";
const output = execSync(command, { encoding: "utf-8" });
const outputLines = output.split("\n");
const DEPLOY_URL = outputLines[outputLines.length - 1];
console.log("[DEPLOY_PREVIEW]: END");
console.log(`You can see the deploy preview on: ${DEPLOY_URL}`);
