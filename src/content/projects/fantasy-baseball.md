---
title: "Fantasy Baseball Forecast Dashboard"
order: 2
description: "Team form tracking, category forecasts and a Bayesian z-score free-agent ranking for my 12-team head-to-head Yahoo league."
heroImage: /projects/fantasy-baseball.png
heroAlt: "Fantasy Baseball dashboard showing the Team Performance form heatmap"
stack: [Bayesian statistics, Forecasting, Statcast, Plotly Dash, MySQL]
problem: "Sports fantasy platforms miss the deep insights from sports data and often present player performance without depth. I seek to provide and leverage those insights to win my fantasy league."
result: "Free agents are ranked with a <strong>Bayesian z-score</strong> across R, HR, RBI, SB, TB and OBP. Empirical-Bayes shrinkage pulls small samples toward the league norm, so a hot week alone doesn't put a player at the top of the list."
demoUrl: https://baseball-forecast-dash-11795e184a30.herokuapp.com/
# codeUrl: https://github.com/francisco-avalos/my-baseball-baseball-team  (repo is private; uncomment to show the Code button)
---

## What it does

Every view ties back to the six batting categories that decide my league: **R, HR, RBI, SB, TB and OBP**.

- **Team performance**: compares each batter's recent form with his own season baseline. Views include a form heatmap, OBP momentum, playing-time shifts, plate skills (K% vs. BB%), a BABIP luck check and the injured list.
- **Free agents**: the Bayesian z-score ranking, a drift monitor that checks it, and side-by-side comparisons against my weakest starter.
- **Predictions**: rest-of-week and rest-of-season category forecasts, with bootstrapped 95% prediction intervals.
- **Player cards and category contribution**: shows who is carrying each category.
- **AI assistant**: a chat that answers questions about the data.

## Data, methods and stack

- **Data sources:** Baseball-Reference, Baseball Savant (Statcast), FanGraphs, RotoWire, the MLB Stats API, Retrosheet and the Yahoo Fantasy API. All are refreshed nightly.
- **Methods:**
  - Conjugate empirical Bayes: Gamma-Poisson for the counting stats and Beta-Binomial for OBP, with priors fit by method of moments.
  - z-scores against a yardstick blended between last season and this one.
  - Poisson and negative binomial models for per-game event probabilities.
  - Bootstrap resampling for forecast intervals.
- **Stack:** Python, pandas, NumPy, SciPy, Plotly Dash, MySQL on AWS RDS, Heroku.
