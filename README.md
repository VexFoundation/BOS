# VEX BOS frontend 
VEX is an Esports betting platform that leverages NEAR’s technology to provide an immersive and interactive betting experience; you can see how we do that [here](https://onedrive.live.com/redir?resid=771419D39CC38DC6!304&authkey=!AEPErdIZLqzIV3Y&ithint=file%2cdocx&e=g4iBlJ)

For this hackathon, we decided to build out a decentralised BOS frontend. The frontend is composed of a gateway and three pages. The betting page lists all the future matches in the backend; you can select one of these matches and then choose how much you want to bet in NEAR and on which team. Since parimutuel betting is implemented, the odds are a function of the user's bets. The potential winnings are calculated by integrating over the odds with respect to the bet amount. Once the match is finished, users will be paid out. 

You can enter the gateway here (please note it only works with Meteor Wallet): betvex.xyz

Or you can enter via the standard BOS gateway: https://test.near.org/vex-hackathon.testnet/widget/VEXNavbar

Here is the code for the backend (not created during this hackathon): https://github.com/VexFoundation/betting-system

You can download the walkthrough here: [VEX_BOS_Walkthrough.mp4](https://github.com/VexFoundation/BOS/blob/main/VEX_BOS_Walkthrough.mp4)https://github.com/VexFoundation/BOS/blob/main/VEX_BOS_Walkthrough.mp4

## Hackathon Team
Owen
Amanda 
Yashank
Quezon

## Screenshots
Homepage
![image](https://github.com/VexFoundation/BOS/assets/131614467/f582cc94-4e97-402b-a790-98bd9a0c35a0)

About Us page
![image](https://github.com/VexFoundation/BOS/assets/131614467/7c1fd914-4565-4ff0-83b1-bc957abd4d16)

Betting page, you can click on a match only when signed into a wallet so that you can't attempt to sign a transaction when not logged in.
![image](https://github.com/VexFoundation/BOS/assets/131614467/a7d7207b-18aa-4056-8880-682b732a851a)

When you select the bet amount and team the odds and potential winnings will dynamically change with your input. This is done by calling a view method to get the potential winnings.
![image](https://github.com/VexFoundation/BOS/assets/131614467/bb64c65b-934b-4a12-9f91-5b5cbf26a75a)

When you click "place bet" you are redirected to this page to confirm the transaction then sign with your wallet, this calls a make_bet method in the smart contract with the match name, team name and bet amount as parameters.
![image](https://github.com/VexFoundation/BOS/assets/131614467/50ac9eca-6a3e-4dc2-96a1-60fb2a687648)
