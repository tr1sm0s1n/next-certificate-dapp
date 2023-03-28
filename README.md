# Next-Certificate-DApp

For Kerala Blockchain Academy CED programme.

## 🛠 Built With

<div align="left">
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/nodejs.svg" width="36" height="36" alt="NodeJS" /></a>
<a href="https://nextjs.org/docs" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/nextjs.svg" width="36" height="36" alt="Next" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/javascript.svg" width="36" height="36" alt="JavaScript" /></a>
<a href="https://soliditylang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/solidity.svg" width="36" height="36" alt="Solidity" /></a>
<a href="https://ethers.io" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/ethers.svg" width="36" height="36" alt="Ethers" /></a>
<a href="https://hardhat.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/hardhat.svg" width="36" height="36" alt="Hardhat" /></a>
<a href="https://ipfs.io/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/ipfs.svg" width="36" height="36" alt="IPFS" /></a>
<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/tailwindcss.svg" width="36" height="36" alt="TailwindCSS" /></a>
</div>

## ⚙️ Run Locally

Run the blockchain simulation (ganache):

```bash
ganache -i 5777
```

Also, run the IPFS Desktop application in parallel.

Clone the project:

```bash
git clone https://github.com/DEMYSTIF/next-certificate-dapp.git
```

Install dependencies:

```bash
npm install
```

Test the contract using Hardhat:

```bash
npm run test
```

Measure the contract coverage:

```bash
npm run coverage
```

Add a 'defaultNetwork' in hardhat.config.js and deploy the contract:

```bash
npm run deploy
```

Run the development server:

```bash
npm run dev
```

Enable cors in IPFS config and restart IPFS Desktop:

```bash
"API": {
  "HTTPHeaders": {
    "Access-Control-Allow-Origin": [
      "*"
    ]
  }
},
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

Distributed under the MIT License.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/<feature_name>`)
3. Commit your Changes (`git commit -m '<feature_name>_added'`)
4. Push to the Branch (`git push origin feature/<feature_name>`)
5. Open a Pull Request
