const xrpl = require('xrpl')

const URL = 'wss://s.devnet.rippletest.net:51233'
const CLIENT = new xrpl.Client(URL)

const MY_WALLET = xrpl.Wallet.fromSeed('')  // TODO insert seed

async function main() {
  await CLIENT.connect()

  /*
   * STEP 1: Mint a token
   */
  // const mintTx = {
  //   TransactionType: 'NFTokenMint',
  //   Account: MY_WALLET.classicAddress,
  //   NFTokenTaxon: 0,
  //   URI: xrpl.convertStringToHex(''),  // TODO insert URI
  //   Flags: xrpl.NFTokenMintFlags.tfTransferable,
  // }
  // xrpl.validate(mintTx)
  // const mintResponse = await CLIENT.submit(
  //   mintTx,
  //   { wallet: MY_WALLET },
  // )
  // console.log(`\n\nNFTokenMint:\n${JSON.stringify(mintResponse, null, 2)}`)

  /*
   * STEP 2A: Offer token for sale
   */
  // const sellOfferTx = {
  //   TransactionType: 'NFTokenCreateOffer',
  //   Account: MY_WALLET.classicAddress,
  //   NFTokenID: '',  // TODO insert NFT ID
  //   Amount: xrpl.xrpToDrops(''),  // TODO insert sale amount
  //   Flags: xrpl.NFTokenCreateOfferFlags.tfSellNFToken,
  // }
  // xrpl.validate(sellOfferTx)
  // const sellOfferResponse = await CLIENT.submit(
  //   sellOfferTx,
  //   { wallet: MY_WALLET },
  // )
  // console.log(`\n\nNFTokenCreateOffer - sellside:\n${JSON.stringify(sellOfferResponse, null, 2)}`)

  /*
   * Step 2B: Agree to buy A's token that is for sale
   */
  // const nftAcceptOfferTx = {
  //   TransactionType: 'NFTokenAcceptOffer',
  //   Account: MY_WALLET.classicAddress,
  //   NFTokenSellOffer: '',  // TODO insert sell offer ID
  // }
  // xrpl.validate(nftAcceptOfferTx)
  // const nftAcceptOfferResponse = await CLIENT.submit(
  //   nftAcceptOfferTx,
  //   { wallet: MY_WALLET },
  // )
  // console.log(`\n\nNFTokenAcceptOffer:\n${JSON.stringify(nftAcceptOfferResponse, null, 2)}`)

  /*
   * Step 3A: Offer to buy the token back
   */
  // const buyOfferTx = {
  //   TransactionType: 'NFTokenCreateOffer',
  //   Account: MY_WALLET.classicAddress,
  //   Owner: '',  // TODO insert B's account address
  //   NFTokenID: '',  // TODO insert NFT ID
  //   Amount: xrpl.xrpToDrops(''),  // TODO insert proposed buy amount
  // }
  // xrpl.validate(buyOfferTx)
  // const buyOfferResponse = await CLIENT.submit(
  //   buyOfferTx,
  //   { wallet: MY_WALLET },
  // )
  // console.log(`\n\nNFTokenCreateOffer - buyside:\n${JSON.stringify(buyOfferResponse, null, 2)}`)

  /*
   * Step 3B: Agree to sell the token back to A for the requested amount
   */
  // const nftAcceptOfferTx = {
  //   TransactionType: 'NFTokenAcceptOffer',
  //   Account: MY_WALLET.classicAddress,
  //   NFTokenBuyOffer: '',  // TODO insert buy offer ID
  // }
  // xrpl.validate(nftAcceptOfferTx)
  // const nftAcceptOfferResponse = await CLIENT.submit(
  //   nftAcceptOfferTx,
  //   { wallet: MY_WALLET },
  // )
  // console.log(`\n\nNFTokenAcceptOffer:\n${JSON.stringify(nftAcceptOfferResponse, null, 2)}`)

  await CLIENT.disconnect()
}

main()
