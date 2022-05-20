# smart-invoice mono repo

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