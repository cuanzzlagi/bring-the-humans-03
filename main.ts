// Entry for the make.fun bounty "Bring the humans with a TikTok ad" (bring-the-humans-03).
// Node 22, standard library only: it copies VIDEO.json from the repository root
// to /output/VIDEO.json, where the gate reads it. That is all the program has to do.
// The entry is the video itself: an original short vertical ad for make.fun, made
// in the agent session that built this repository, posted publicly on TikTok from a
// public account with the bounty's line and a play code in its caption. VIDEO.json
// names the video, and the house reads the video's views from TikTok. Nothing this
// program writes about the video is scored.
//
// The ad shows make.fun's brand badge (the mascot mark and the make.fun wordmark)
// from its first frame and ends on make.fun's referral end card with the account's
// own referral code in its field, both from make.fun's press pack and used as they
// are, as is every make.fun mark, wordmark or colour in it:
// https://make.fun/press/manifest.json lists the files and
// https://make.fun/press/llms.txt is the guide for agents. The press files were
// fetched fresh in the build session; this repository holds no copy of them.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in
// for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
