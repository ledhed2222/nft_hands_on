# XRPL NFT hands-on workshop

This workshop will show you how to mint and trade NFTs on the
[XRP Ledger](https://xrpl.org/). It is meant to be run in pairs, but you can do
it solo by switching between accounts.

## Installation

* Make sure you have [node.js](https://nodejs.org/en/) installed on your machine. You can check whether you do by running:
  ```bash
  node -v
  ```

* Install this repo's dependencies:
  ```bash
  npm install
  ```

## Workshop

We will be minting and trading NFTs using XRPL's Development Network. To
perform any actions on XRPL, you need an account with a minimal amount of
funding. In the DevNet, you can use a tool called the "faucet" to create and
fund accounts for you.

### Preparation
* Create an account on DevNet using the [faucet](https://xrpl.org/xrp-testnet-faucet.html).
* Note the account's Address and Secret. You will need these later.

### Exercise 1: mint a new NFT (both partners)
* Open `index.js` in this repo and enter your account's secret on line 6, where the variable `MY_WALLET` is declared.
* Uncomment only the example marked `STEP 1: Mint a token`. Enter a value for the `URI` field. You can use the URI of a gif from [Giphy](https://giphy.com) if you're looking for examples.
* Save the file then run it via:
  ```bash
  node index.js
  ```
* Verify that your account now owns the specified NFT by entering your
    account's address (not your account's secret) in the [XRPL Explorer](https://devnet.xrpl.org). Can you find your NFT?

### Exercise 2A: offer to sell your NFT (partner A only)
* Re-comment exercise 1 from `index.js`. Uncomment only the example marked `STEP 2A: Offer token for sale`.
* Enter the ID of the NFT you minted in step one where indicated.
* Enter an amount to sell the NFT for, denominated in this case in XRP.
* Save the file then run it via:
  ```bash
  node index.js
  ```
* Verify that this NFT now has an active sell offer using the explorer.

### Exercise 2B: buy partner A's token (partner B only)
* Re-comment exercise 1 from `index.js`. Uncomment only the example marked `STEP 2B: Agree to buy A's token that is for sale`.
* Enter the ID of the sell offer that partner A created in step 2A.
* Save the file then run it via:
  ```bash
  node index.js
  ```
* Verify that you now own A's NFT and that they do not, using the explorer.
    Verify also that your XRP balance decreased by the amount specified in
    their sell offer.

### Exercise 3A: partner A offers to buy their token back (partner A only)
* Re-comment exercise 2A from `index.js`. Uncomment only the example marked `STEP 3A: Offer to buy the token back`.
* Fill in all the fields marked TODO.
* Save the file then run it via:
  ```bash
  node index.js
  ```
* Verify in the explorer that this NFT now has a buy offer.

### Exercise 3B: sell token back to partner A (partner B only)
* Re-comment exercise 2B from `index.js`. Uncomment only the example marked `STEP 3B: Agree to sell the token back to A for the requested amount`.
* Fill in all the fields marked TODO.
* Save the file then run it via:
  ```bash
  node index.js
  ```
* Verify in the explorer that this NFT now belongs to A again.

## Congratulations!
Now you have minted and traded NFTs on XRPL! What else can you do with NFTs on
XRPL? Check out the documentation on (https://xrpl.org) to see!
