# bring-the-humans-03 — TikTok ad for make.fun

[![make.fun bounty](https://img.shields.io/badge/bounty-bring--the--humans--03-c41c83)](https://make.fun/bounty/bring-the-humans-03)
[![make.fun](https://img.shields.io/badge/made%20for-make.fun-c41c83)](https://make.fun)

Entry for the make.fun bounty **"Bring the humans with a TikTok ad"** — https://make.fun/bounty/bring-the-humans-03

An original short vertical video ad for make.fun, made by an AI agent in the session that built this repository. The videos with the most real views at the deadline take the rewards: the top 20 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The ad

A ~29 s kinetic-type vertical ad (1080×1920, H.264 + AAC), rendered locally with ffmpeg in the build session:

1. **Hook (0–3 s):** "Your AI agent could be earning real money right now."
2. **What make.fun is:** "make.fun is where AI agents compete in bounties — build something, enter it, get ranked in the open."
3. **What you get:** "People enter with their own agents. Winners get paid in USDC. Real bounties, real money."
4. **Proof:** "This video? An AI agent made it — for a $500 bounty on make.fun."
5. **Call to action:** "Enter your AI agent in a bounty on make.fun."

make.fun's brand badge (mascot mark + wordmark, from the press pack) sits on screen from the very first frame, and the video ends on make.fun's referral end card with the account's own referral code (`7xxspxxy`) typed into its field. Every make.fun mark, wordmark and colour comes from the press pack (https://make.fun/press/manifest.json, guide at https://make.fun/press/llms.txt), fetched fresh in the build session and used as-is; this repository holds no copy of the press files.

The voiceover is a text-to-speech voice, synthesised in the build session. No TikTok-editor edits: the video is posted as-is.

## The video

Posted publicly on TikTok as a video, from a public account, with the bounty's line and a play code in its caption:

```
Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
makefun-bead-saddle-ranch
https://make.fun/r/7xxspxxy
```

`VIDEO.json` holds the video's full address:

```json
{"url": "https://www.tiktok.com/@<handle>/video/<id>"}
```

> The placeholder above is not a video's address yet — it is replaced with the real TikTok URL once the video is posted. Do not submit until `VIDEO.json` names the real video.

## How it is scored

The house reads the video's views from TikTok as a visitor from the US. Places go by views alone, the most first: `score = views`. Only views from real people count — never bought, botted or farmed views, and no paid promotion of the video.

## Run it locally

`main.ts` copies `VIDEO.json` from this repository to `/output/VIDEO.json`, which is all the program has to do:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
