# smart-invoice mono repo


Invoiced is a sophisticated invoicing tool that facilitates payments between organizations or Clients, and freelancers or Providers. features are as follows:

Each invoice is its own contract
Deposits may come from any address
Client can make deposits by milestone
Milestone payments can be variable in size
Custom arbitration can be set ( any Ethereum Address)
Client can deposit more than the total amount (for gratuity)
Tokens accidentally sent directly to invoice can be recovered

## How Does it Work?
Invoiced leverages smart contracts  to create a framework by which service providers can rapidly create invoices and deploy them to the blockchain.

After the provider has setup the smart invoice, the client can deposit their payment to smart invoice in the form of milestones. Milestones allow payment to be released by the client as work is completed by the provider.

When a client deposits funds into a milestone or milstone(s), payment is sent to and held by smart invoice, and when the client releases those funds, they are sent to the service provider's wallet address.

In the case either a client or provider decides to lock funds in smart invoice, a submission is made to a third party arbitration provider who will help by resolving the dispute.


## install packages

```
yarn install 
```


## Deploy the contract

```
yarn run contracts:deploy-rinkeby

```

## Subgraph

### Configure the subgrap by changing these values in /config files respectively 

```
{
  "network": "mainnet",
  "factories": [
    {
      "factoryName": "Version00",
      "startBlock": "12803981",
      "address": "0xb7019c3670f5d4dd99166727a7d29f8a16f4f20a"
    }
  ]
}
```



### Auth sungraph with token

```
yarn run subgraph:auth
```

### Deploy the subgraph 

```
yarn run subgraph:deploy-rinkeby
```


## Dapp development 

## Start Dapp

```
yarn run dapp:start
```

## Build dapp for production 

```
yarn run dapp:build
```

##
