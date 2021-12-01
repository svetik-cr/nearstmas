<template>
  <div class="main-window">
    <h3>Hello my little {{ user.accountId }}</h3>
    <hr>
    <button class="inner" @click="selected=1" :disabled="selected===1">1. Write a letter to Santa Claus</button>
    <button class="inner" @click="selected=2" :disabled="selected===2">2. Choice your Gift</button>
    <button class="inner" @click="selected=3" :disabled="selected===3">3. Santa Say...</button>

    <div class="block" v-if="selected===1">
      <p>You can send so many messages as you wish:</p>
      <textarea placeholder="Ask / Wish / Dream" maxlength="500" v-model="messageText"></textarea>
      <div class="relative">
        <label class="vip">
          <input type="checkbox" v-model="vipMessage" style="-webkit-appearance: checkbox"/>
          VIP Letter (0.1 NEAR)
        </label>
        <button class="action" @click="sendMessage()" v-if="!sendLoader">Send Message</button>
      </div>
      <img src="/img/christmas-loading.gif" alt="" class="message-loader" v-if="sendLoader" width="200">

      <hr>
      <h5>Your Messages:</h5>
      <div v-if="messagesReady" class="list-messages">
        <div v-if="messages.length">
          <div v-for="message in messages" :key="message.text" class="one-message" :class="{isVip: message.isVip}">
            <p>{{ message.text }}</p>
            <span class="time">{{ dateTime(message.timestamp) }}</span>
          </div>
        </div>
        <div v-if="!messages.length">
          <i>*You don't send messages to Santa. Don't be shy, just write something!</i>
        </div>
      </div>
      <div v-if="!messagesReady">
        <img src="/img/christmas-loading.gif" alt="" class="messages-list-loader" width="200">
      </div>
    </div>

    <div class="block" v-if="selected===2">
      <p>You can select only one gift. Also you can change your gift and see gifts history:</p>
      <div class="gift-list">
        <div class="one-gift" v-for="gift in giftList" :key="gift.id" :class="{
          selected: selectedGift===gift.id
        }" @click="selectGift(gift.id)">
          <img :src="gift.url">
        </div>
      </div>
      <hr>

      <h3>Gifts History:</h3>
      <div v-if="giftsReady">
        <span v-for="oneGift in giftHistory" :key="oneGift" class="small-gift">
          <img :src="getUrl(oneGift)" width="50" alt="">
        </span>
        <div v-if="!giftHistory.length">
          *Your gifts history is empty, select your gift!
        </div>
      </div>
      <div v-if="!giftsReady">
        <img src="/img/christmas-loading.gif" alt="" class="messages-list-loader" width="200">
      </div>
    </div>

    <div class="block" v-if="selected===3">
      <button class="action" @click="santaSay" :disabled="isPing">Ping Santa...</button>
      <hr>
      <h4>Random Santa stories for you:</h4>
      <div v-for="text in santaSayList" :key="text" class="one-joke">
        {{ text }}
      </div>
      <img v-if="isPing" src="/img/christmas-loading.gif" alt="" class="messages-list-loader" width="200">
    </div>

  </div>
  <button class="sign-out button" v-if="user" @click="signOut()" style="background:transparent; border: 3px solid red;">LEAVE SANTA</button>
</template>

<script>
export default {
  name: 'NftList',
  computed: {
    user() {
      return window.currentUser;
    }
  },
  data() {
    return {
      selected: 1,
      messageText: '',
      sendLoader: false,
      messagesReady: false,
      giftsReady: false,
      vipMessage: false,
      isPing: false,
      messages: [],
      giftHistory: [],
      santaSayList: [],
      selectedGift: 0,
      giftList: [
        {
          'id': 1,
          'url': 'https://www.gannett-cdn.com/presto/2019/10/11/USAT/99321768-a7c2-45c9-a5fe-63e5eb185b7a-Best_Gifts_for_Kids_of_2019-Kiddzery_Play_Tent_Ball_Pit.png?crop=473,355,x79,y0&quality=50&width=640'
        },
        {
          'id': 2,
          'url': 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1635525612-gifts-for-kids-lego-vidiyo-1635525533.jpg?crop=1xw:1xh;center,top&resize=480:*'
        },
        {'id': 3, 'url': 'https://5.imimg.com/data5/VN/YI/FX/SELLER-88799671/birthday-gift-for-kids-500x500.jpg'},
        {'id': 4, 'url': 'https://i.pinimg.com/originals/5f/b4/ef/5fb4ef6c7aa2621d66cda58cce5526f4.jpg'},
      ]
    }
  },
  created() {
    this.loadMyMessages();
    this.loadMyGift();
    this.loadMyGiftHistory();
  },
  methods: {
    signOut() {
      window.wallet.signOut();
      window.location.replace(window.location.origin + window.location.pathname);
    },
    getUrl(id) {
      let url = '';
      for (let i = 0; i < this.giftList.length; i++) {
        if (this.giftList[i].id == id) {
          url = this.giftList[i].url;
        }
      }
      return url;
    },
    selectGift(id) {
      this.selectedGift = id;
      this.giftsReady = false;
      window.contract.addGift({
        id: id
      }).then(() => {
        this.loadMyGiftHistory();
      });
    },
    loadMyGiftHistory() {
      this.giftsReady = false;
      window.contract.myGiftHistory().then((result) => {
        this.giftHistory = [];
        Object.keys(result).forEach(key => {
          this.giftHistory.push(result[key]);
        });
        this.giftsReady = true;
      });
    },
    loadMyGift() {
      window.contract.myGift().then((result) => {
        this.selectedGift = result;
      });
    },
    sendMessage() {
      this.sendLoader = true;
      if (this.messageText.length < 2) {
        alert('Please add some text!');
      } else {
        if (this.vipMessage) {
          const deposit = this.vipMessage ? "100000000000000000000000" : null;
          const gas = "300000000000000";
          window.contract.addMessage({
            text: this.messageText
          }, gas, deposit).then(() => {
            this.messageText = '';
            this.sendLoader = false;
            this.loadMyMessages();
          });
        } else {
          window.contract.addMessage({
            text: this.messageText
          }).then(() => {
            this.messageText = '';
            this.sendLoader = false;
            this.loadMyMessages();
          });
        }
      }
    },
    dateTime(timestamp) {
      const date = new Date(timestamp / 1000000);
      const day = date.getDay() > 9 ? date.getDay() : "0" + date.getDay();
      const month = date.getMonth() > 9 ? date.getMonth() : "0" + date.getMonth();
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = "0" + date.getMinutes();
      return month + '/' + day + '/' + year + ' ' + hours + ':' + minutes.substr(-2);
    },
    loadMyMessages() {
      this.messagesReady = false;
      window.contract.myMessages().then((result) => {
        this.messages = [];
        Object.keys(result).forEach(key => {
          this.messages.unshift(result[key]);
        });
        this.messagesReady = true;
      });
    },
    santaSay() {
      this.isPing = true;
      window.contract.santaSay().then((result) => {
        this.santaSayList.push(result);
        this.isPing = false;
      });
    }
  }
}
</script>

<style>
.main-window {
  position: relative;
  width: 75%;
  min-width: 900px;
  margin: 50px auto;
  background: rgba(20, 20, 20, 0.75);
  border: 1px solid rgba(255, 255, 255, .8);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .7);
  overflow: hidden;
  padding: 30px;
  border-radius: 10px;
  color: #FFF;
}

.main-window:after {
  box-shadow: inset 0 0 1000px rgba(255, 255, 255, .3);
  filter: blur(10px);
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.relative {
  position: relative;
}

.vip {
  position: absolute;
  bottom: 13px;
  left: 10%;
}

.sign-out {
  color: #FFF;
  border: none;
}

.list-messages {
  max-height: 200px;
  overflow-y: auto;
}

button.inner, button.action {
  border: none;
  background: #e10404;
  color: #FFF;
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 10px;
  font-weight: bold;
}

.block {
  margin-top: 26px;
}

button.inner[disabled] {
  background: #b10606;
  color: #eee;
}

.time {
  position: absolute;
  right: 0;
  top: 10px;
  color: #999;
  font-size: 13px;
}

textarea {
  width: 80%;
  height: 140px;
  padding: 10px;
  display: block;
  margin: auto !important;
}

.one-joke {
  padding: 16px;
}

.one-joke:not(:last-child) {
  border-bottom: 2px solid #333;
}

button.action {
  border: 3px solid #e10404;
  color: #e10404;
  background: #FFF;
  margin-top: 10px;
}

.gift-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
}

.one-gift {
  border: 3px solid transparent;
  cursor: pointer;
}

.small-gift {
  margin-right: 10px;
}

.small-gift:not(:last-child):after {
  content: '>';
  display: inline-block;
  margin: 10px 0px 10px 10px;
}

.one-gift:hover {
  background-color: #FFF;
}

.one-gift.selected {
  background-color: red;
}

.one-gift img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

hr {
  border: none;
  border-top: 2px dashed red !important;
  background: transparent;
}

.one-message {
  padding: 16px;
  text-align: left;
  position: relative;
  margin: 0 15%;
}

.one-message.isVip p {
  color: yellow;
  font-weight: bold;
}

.one-message p {
  margin: 0 20% 0 0;
}

.one-message:not(:last-child) {
  border-bottom: 2px solid #333;
}

.block {
  display: block;
  position: relative;
}

.message-loader {
  margin-top: -82px;
}
</style>
