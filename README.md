# XanFi

XanFi simplifies the process of building a crypto portfolio by allowing users to create and invest in funds that are made of underlying crypto assets. Making investment in crypto more approachable through crypto indexes.

## Demo

- [Website - LIve Demo](https://indexfund.netlify.app/)

  ![Main Page](https://raw.githubusercontent.com/electrone901/-Crypto-Crush-NFT---TRUST-EVM/main/previ.png) <br> <br>

# Project Idea

The idea behind the project is to be able to create 'funds' that are made up underlying crypto assets to help in the following and others

1. Track the performance of crypto assets that maybe similar

2. Have a risk tolerant portfolio by essentially owning different crypto assets 3. Get a portfolio easily(especially for beginners)
   Basicly the Dapp would allow the creation of a new token that represents a pool of other crypto assets, take for example a user wants to track/own metaverse project tokens
   but does not want to always hold them in his wallets, he could create a new 'index' token that essentially has say
   20% of token1, 40% of token2 and 40% token3
   this means that the new token is a combination of token1, token2 and token3 but then if token1 losses alot of value
   or the price goes down, the price of the newly created token might not go down alot because the prices of token2 and token3 have either remained
   the same or gone up.
   Thus this new 'index' token can be transfered to anyone since it will be an ERC20 standard token, and anyone who holds the token might be able to redeem
   the underlying assets of the the 'index' token.
   Since these 'index' tokens can be created by any user, the template for the for the creation of the token can be used by other users
   to make the same token(actually purchasing them).

   ## Pricing mechanism

   The mechanism that'd be used calculating the price of tokens created by users in the Dapp is similar to the Net Available Value(NAV) method
   used in calculating the prices of mutual funds and index funds- total value of underlying asssets / total number of shares.

   In the case of the tokens though given that token1, token2 and token3 were used in creating the 'index' token the price of the token 'P' is then calculated as
   P = Total value of underlying assets / total number of tokens in circulation

   Total value of underlying assets = (price of token1 _ amount of token1 held in token smart contract) + (price of token2 _ amount of token2 held in token smart contract) + (price of token3 \* amount of token3 held in token smart contract)

   ## User/App flow -Homescreen

   When a user enters the site for the first or without his wallet connected, they see the screen that contains the list of index tokens

   ## Loging in

   The loging in task would be kind of straight forward as their won't be a need for sign up just to connect wallet(metamask) this will connect to the users wallet and the address string used for further operations.

   ## View index token

   When a user clicks on a token widget on the homescreen, the index token page is opened and the details of the token are retrieved from the backend from this screen if the user wants to buy the token, they can from this screen. the operation to retrieve the token details is as follows the address is passed to an API call and then the price of the token, the underlying assets, number of owners and other details are returned.

   ## View portfolio

   To navigate to the portfolio page, the user should have connected his wallet. An API call is made to retrieve the tokens owned by the user, their prices and the users total balance. it would also have a uniswap widget where the user can purchase USDT(The stable coin used in the Dapp).

   ## Creating index token

   The user selects the three underlying assets they want, the amount(in USDT) they want to use in creating the token, the user first deploys standard contract and the underlying assets are then bought by the using uniswap and stored in the token smart contract and the tokens issued to the user. On the backend the token creator, the token address and the underlying assets and other details are recorded on the backend (firestore database).

   ## Buying index token

   To purchase an index token, the user will need to have his wallet connected and then inputs the amount of USDT worth, then the amount of tokens to be bought is calculated and the then the underlying assets for the token is bought and stored in the token smart contract and the corresponding token amount issued to the user.

   ## Selling index token

   To purchase an index token, the user will need to have his wallet connected and then inputs the amount of tokens he wants to sell and the then the underlying assets for the token are from the token smart contract and the corresponding USDT amount transfered to the user.

# TEAM

The team was made up of a product designer, frontend developer, backend developer and the smart contract developer
Smart contract developer --- NatX Frontend developer --- Electrone Product designer --- Yacic Backend developer --- Song
Technologies used
Product design - Figma was primaliry used for the product design and user interfaces

# How it's made

XanFi application makes use of the following software:
- `Covalent` for fetching token prices and retrieves all the NFT from all wallet address. Used Covalent API Get historical token prices
https://github.com/ysongit/IndexFundServer/blob/main/api/fund.js#L23
- Deployed smart contracts on the `Polygon Network` 0x5FbDB2315678afecb367f032d93F642f64180aa3
  test network. Trust Network enables our application to be highly scalable with afforable transactions.
- Used `hardhat & MetaMask`.
- Upload and store files to `Lighthouse, IPFS NFTStorage` [IPFS](https://nft.storage/) platform.
- Build a simple `Solidity` smart contract.
- `OpenZeppelin` Library to customize smart contract
- Develop, deploy, and run tests the application with `hardhat` (local blockchain)
- Build and use `React Js` to create components for single-page applications.
- Chainlink: for random generator number, Material-UI` to build faster, beautiful, and more accessible React applications.
- Frontend - React was used for building out the frontend of the Dapp, `Moralis` was also used for the interaction with the smart contract
- Backend - Node.js and express were used for the server and backend, Covalent APIs were also used to get price feeds for underlying asset tokens
- SmartContract - Since the smart contracts was developed with polygon in mind, solidity was used for writing the smart contracts and hardhat for testing purposes.
- Uniswap was also used for purchasing the underlying assets in the smart contract.

# SwapWidget

The `SwapWidget` component is passed everything it needs to render:

- `jsonRpcEndpoint`: a JSON-RPC endpoint, or an `@ethersproject` `JsonRpcProvider`; in this case "https://cloudflare-eth.com"
- `tokenList`: a TokenList; in this case "https://gateway.ipfs.io/ipns/tokens.uniswap.org"
- `provider`: an EIP1193 Provider, or an `@ethersproject` `JsonRpcProvider`; in this case from `connectors.ts`

In addition, it is passed these optional props to flesh out the demo:

- `locale`: the locale in which to render, in this case "en-US"
- `onConnectWallet`: a callback to invoke when a user clicks "Connect your wallet"
- `defaultInputTokenAddress`: the default input token address, or "NATIVE" for Ether
- `defaultInputAmount`: the default input token amount
- `defaultOutputTokenAddress`: the default output token amount, in this case the address of the Uniswap (UNI) token
