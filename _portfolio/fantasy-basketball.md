---
title: "NBA Fantasy Analytics"
order: 1
excerpt: "Player forecasts, injury survival curves and a minutes-weighted free-agent screener for my ESPN and Yahoo fantasy basketball leagues."
image: /images/projects/fantasy-basketball.png
image_alt: "NBA Fantasy Analytics dashboard home page"
problem: "Sports fantasy platforms miss the deep insights from sports data and often present player performance without depth. I seek to provide and leverage those insights to win my fantasy league."
result: "Free agents are ranked by **minutes-weighted production**, which ESPN and Yahoo rankings miss: a player who scores 20 points in 22 minutes ranks above one who needs 38 minutes to do the same."
demo_url: https://fantasy-basketball-team-dash-aef016454ed4.herokuapp.com/
code_url: https://github.com/francisco-avalos/fantasy_basketball
stack: [Time series, LSTM, Survival analysis, Plotly Dash, MariaDB]
---

{% include project-header.html project=page %}

## The problem

{{ page.problem }}

## What it does

- **Free agent screener**: ranks waiver-wire pickups by minutes-weighted category production. Filter by league, date range, calculation type and stat category.
- **Player predictions**: forecasts each player's points over the next five games.
- **Injury survival analysis**: Kaplan-Meier curves estimate the probability that a player returns within *N* days, by injury type.
- **Team performance**: minutes-weighted production heatmaps, weekly contribution trends, per-player box plots and weekday vs. weekend splits for my roster.
- **AI assistant**: a Claude-powered chat that answers questions about the data and suggests moves.

## Data, methods and stack

- **Data sources:** daily game logs from Basketball-Reference, league rosters from the ESPN and Yahoo fantasy APIs, and injury transactions from Pro Sports Transactions.
- **Models:** ARIMA, SARIMAX, single and double exponential smoothing, LSTM and feed-forward neural networks, with naive baselines. Every player is evaluated across 8 model types with walk-forward validation. The model with the lowest MAE on held-out games is that player's champion.
- **Pipeline:** a daily refresh loads the data into MariaDB, and the models retrain on the new data.
- **Stack:** Python, pandas, statsmodels, TensorFlow/Keras, Plotly Dash, MariaDB, Heroku.

## Key result

{{ page.result | markdownify }}
