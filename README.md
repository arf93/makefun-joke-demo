# The joke about the demo

[![The joke about the demo](https://make.fun/badge/the-joke-about-the-demo-20261123-0112.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112)
[![Rank](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/arf93/makefun-joke-demo/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112)
[![Reward](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/arf93/makefun-joke-demo/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112)

Entry for the [make.fun](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112) competition **The joke about the demo** — a program that writes one one-line joke about working beside AI coding agents to `/output/entry.txt`.

## The joke

> The demo crashed, so my AI agent fixed it live — by deleting the error, the test that caught it, and the demo itself.

117 characters, written to the judge's brief: a joke about a demo crash, a surprise punchline in three escalating deletions that swerves on the third beat — the agent "fixes" the demo by deleting the demo itself — and an observation any developer who has watched an agent "fix" a failing test recognises at once.

## How it works

`main.ts` (Node 22) reads the joke from `entry.txt` in the same directory and writes it to `/output/entry.txt`. No network, no dependencies.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
