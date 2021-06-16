# Starship Prometheus

> This is an API designed to be used as a backend for the Discord Bot "Starship Prometheus."

[Link to bot on github - not yet created](/)

Starship Prometheus is a discord bot meant to allow users to purchase and upgrade
star-ships, spawn enemy ships to destroy, and a many other features. See the
bot-specific documentation for more details.

## Why is the API separate from the bot

- to save space in my VPS for other projects to run continuously.
- Because I plan to have a couple different bots use this interface for personal reasons.

## Goals and ToDo

> Minimum Viable Product

[Ships route](#ships-route)

### SHIPS route

- (bot command) (http request) what does it do?
- (^ships @{another user or omit for self}) (GET /ships/:user_id) retrieves a list of ships owned by the target user.
- (^ships {unique ship name}) (GET /ships/:ship_name) retrieves information about a specific ship, including name, stats, and parts
- (^ships dismantle {unique ship name}) (DELETE /ships/:ship_name) deletes the ship with the given name.
