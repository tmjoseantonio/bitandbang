#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Sergio NS /'),
  handle: chalk.cyan('sergionsz'),
  work: chalk.white('Senior Web Engineer at Huge'),
  twitter: chalk.cyan('https://twitter.com/sergionsz'),
  github: chalk.cyan('https://github.com/sergionsz'),
  linkedin: chalk.cyan('https://linkedin.com/in/sergionsz'),
  // web: chalk.cyan('https://bnb.im'),
  npx: chalk.white('npx sergio'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  // labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
// const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
// const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + newline + newline + carding

console.log(chalk.green(boxen(output, options)))
