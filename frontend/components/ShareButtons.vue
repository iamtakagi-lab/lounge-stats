<template>
  <div class="buttons">
    <a class="twitter-button" :href="twitterUrl()" target="_blank" rel="noopener">
      <font-awesome-icon :icon="['fab', 'twitter']" />
    </a>
    <a class="line-button" :href="lineUrl()" target="_blank" rel="noopener">
      <font-awesome-icon :icon="['fab', 'line']" />
    </a>
    <a class="facebook-button" :href="facebookUrl()" target="_blank" rel="noopener">
      <font-awesome-icon :icon="['fab', 'facebook-f']" />
    </a>
    <a class="hatebu-button" :href="hatebuUrl()" target="_blank" rel="noopener">
      <i class="fa fa-hatena"></i>
    </a>
    <a class="pocket-button" :href="pocketUrl()" target="_blank" rel="noopener">
      <font-awesome-icon :icon="['fab', 'get-pocket']" />
    </a>
  </div>
</template>

<script >
export default {
  data() {
    return {
      url: `https://150cclounge.glitch.me${this.$route.path}`,
      twitter_url:
        "https://twitter.com/intent/tweet?url={0}&text={1}",
      line_url: "https://timeline.line.me/social-plugin/share?url={0}",
      facebook_url: "https://www.facebook.com/share.php?u={0}",
      hatebu_url:
        "http://b.hatena.ne.jp/add?mode=confirm&amp;url={0}&amp;title={1}",
      pocket_url: "http://getpocket.com/edit?url={0}",
    };
  },
  methods: {
    formatByArr(msg) {
      // フォーマット（引数可変（配列）版）
      var args = [];
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
      // URLエンコード
      args = args.map((x) => encodeURIComponent(x));
      return msg.replace(/\{(\d+)\}/g, function (m, k) {
        return args[k];
      });
    },
    twitterUrl() {
      return this.formatByArr(this.twitter_url, this.url, "MK8DX 150cc Lounge" + this.name + "'s Stats");
    },
    lineUrl() {
      return this.formatByArr(this.line_url, this.url);
    },
    facebookUrl() {
      return this.formatByArr(this.facebook_url, this.url);
    },
    hatebuUrl() {
      return this.formatByArr(this.hatebu_url, this.url, this.name);
    },
    pocketUrl() {
      return this.formatByArr(this.pocket_url, this.url);
    },
  },
  props: {
    name: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.buttons {
  display: inline-flex;
  width: 100%;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;

  .twitter-button {
    width: 100%;
    transition: all 300ms;
    font-size: 32px;
    border-top: 1px #444;
    border-bottom: 1px #444;
    background: white;
    color: black;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    &:hover {
      background: #00aced;
      color: white;
    }
  }

  .line-button {
    width: 100%;
    transition: all 300ms;
    font-size: 32px;
    border-top: 1px #444;
    border-bottom: 1px #444;
    background: white;
    color: black;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    &:hover {
      background: #00b900;
      color: white;
    }
  }

  .facebook-button {
    width: 100%;
    transition: all 300ms;
    font-size: 32px;
    border-top: 1px #444;
    border-bottom: 1px #444;
    background: white;
    color: black;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    &:hover {
      background: #3b5998;
      color: white;
    }
  }

  .pocket-button {
    width: 100%;
    transition: all 300ms;
    font-size: 32px;
    border-top: 1px #444;
    border-bottom: 1px #444;
    background: white;
    color: black;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    &:hover {
      background: #ef4056;
      color: white;
    }
  }

  .hatebu-button {
    width: 100%;
    transition: all 300ms;
    font-size: 32px;
    border-top: 1px #444;
    border-bottom: 1px #444;
    background: white;
    color: black;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    cursor: pointer;
    text-decoration: none !important;

    &:hover {
      background: #008fde;
      color: white;
    }
  }
}

.fa-hatena {
  &:before {
    font-size: 32px;
    font-family: Verdana;
    content: "B!";
    font-weight: bold;
    font-style: initial;
  }
}
</style>