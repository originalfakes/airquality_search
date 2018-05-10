<template>
  <div class="container">
    <div class="instruction" style="text-align: center;">
      <h2>點擊下方下拉式選單查詢</h2>
    </div>
    <div class="district">
    <span id="unit">
      所屬單位: 
      <select id="subUnit" name="environment">
        <option value="environment">環保署</option>
      </select>
    </span>
    <span class="area">
      地區:
      <select id="ddl_Area" @change="selectArea()">
        <option disabled selected></option>
        <option value="North">北部</option>
        <option value="Chu-Miao">竹苗</option>
        <option value="Central">中部</option>
        <option value="Yun-Chia-Nan">雲嘉南</option>
        <option value="KaoPing">高屏</option>
        <option value="Yilan">宜蘭</option>
        <option value="Hua-Tung">花東</option>
        <option value="Island">離島</option>
      </select>  >
      <select id="North" class="ddl_Site" @change="selectSite(0)">
        <option disabled selected></option>
        <option value="富貴角">富貴角</option>
        <option value="萬里">萬里</option>
        <option value="淡水">淡水</option>
        <option value="陽明">陽明</option>
        <option value="基隆">基隆</option>
        <option value="士林">士林</option>
        <option value="林口">林口</option>
        <option value="三重">三重</option>
        <option value="菜寮">菜寮</option>
        <option value="汐止">汐止</option>
        <option value="大同">大同</option>
        <option value="中山">中山</option>
        <option value="大園">大園</option>
        <option value="松山">松山</option>
        <option value="萬華">萬華</option>
        <option value="新莊">新莊</option>
        <option value="觀音">觀音</option>
        <option value="古亭">古亭</option>
        <option value="永和">永和</option>
        <option value="板橋">板橋</option>
        <option value="土城">土城</option>
        <option value="桃園">桃園</option>
        <option value="新店">新店</option>
        <option value="平鎮">平鎮</option>
        <option value="中壢">中壢</option>
        <option value="龍潭">龍潭</option>
      </select>
      <select id="Chu-Miao" class="ddl_Site" @change="selectSite(1)">
        <option disabled selected></option>
        <option value="湖口">湖口</option>
        <option value="新竹">新竹</option>
        <option value="竹東">竹東</option>
        <option value="頭份">頭份</option>
        <option value="苗栗">苗栗</option>
        <option value="三義">三義</option>
      </select>
      <select id="Central" class="ddl_Site" @change="selectSite(2)">
        <option disabled selected></option>
        <option value="豐原">豐原</option>
        <option value="沙鹿">沙鹿</option>
        <option value="西屯">西屯</option>
        <option value="忠明">忠明</option>
        <option value="線西">線西</option>
        <option value="大里">大里</option>
        <option value="彰化">彰化</option>
        <option value="埔里">埔里</option>
        <option value="二林">二林</option>
        <option value="南投">南投</option>
        <option value="竹山">竹山</option>
      </select>
      <select id="Yun-Chia-Nan" class="ddl_Site" @change="selectSite(3)">
        <option disabled selected="selected"></option>
        <option value="崙背">崙背</option>
        <option value="麥寮">麥寮</option>
        <option value="臺西">臺西</option>
        <option value="斗六">斗六</option>
        <option value="新港">新港</option>
        <option value="朴子">朴子</option>
        <option value="嘉義">嘉義</option>
        <option value="新營">新營</option>
        <option value="善化">善化</option>
        <option value="安南">安南</option>
        <option value="臺南">臺南</option>
      </select>
      <select id="KaoPing" class="ddl_Site" @change="selectSite(4)">
        <option disabled selected></option>
        <option value="美濃">美濃</option>
        <option value="橋頭">橋頭</option>
        <option value="楠梓">楠梓</option>
        <option value="仁武">仁武</option>
        <option value="左營">左營</option>
        <option value="屏東">屏東</option>
        <option value="前金">前金</option>
        <option value="鳳山">鳳山</option>
        <option value="復興">復興</option>
        <option value="前鎮">前鎮</option>
        <option value="小港">小港</option>
        <option value="大寮">大寮</option>
        <option value="潮州">潮州</option>
        <option value="林園">林園</option>
        <option value="恆春">恆春</option>
      </select>
      <select id="Yilan" class="ddl_Site" @change="selectSite(5)">
        <option disabled selected></option>
        <option value="宜蘭">宜蘭</option>
        <option value="冬山">冬山</option>
      </select>
      <select id="Hua-Tung" class="ddl_Site" @change="selectSite(6)">
        <option disabled selected></option>
        <option value="花蓮">花蓮</option>
        <option value="關山">關山</option>
        <option value="臺東">臺東</option>
      </select>
      <select id="Island" class="ddl_Site" @change="selectSite(7)">
        <option disabled selected></option>
        <option value="馬祖">馬祖</option>
        <option value="金門">金門</option>
        <option value="馬公">馬公</option>
      </select>
      <button type="button" id="search" @click="search()">查詢</button>
    </span>
    </div>
    <div id="time">發佈日期: {{time}}</div>
    <div id="result">
      <div id="area">
        <span id="site" style="font-size: 40px; font-weight: 700;">{{area}}</span>
        <span style="color: blue; font-weight: 700; margin-left: 120px;">(一般站) (分鐘值)</span>
      </div>
      <div id="AQI" v-bind:class="{
        'status_good':  this.AQI<=50,
        'status_ordinary': this.AQI>=51 && this.AQI<=100,
        'status_bad': this.AQI>=101 && this.AQI<=150,
        'status_soBad': this.AQI>=151 && this.AQI<=200,
        'status_danger': this.AQI>=201 && this.AQI<=300,
        'status_veryDanger': this.AQI>=301
        }">
        <div id="AQI_value">
          <span id="AQI_site">AQI</span>
          <span id="value">{{AQI}}</span>
        </div>
        <div id="AQI_status">
          <span id="AOI_name">空氣品質指標</span>
          <span id="status">{{AQI_status}}</span>
        </div>
      </div>
      <table>
        <tbody>
          <tr>
            <td rowspan="2" class="title">
              O
              <sub>3</sub> <br>
              (ppb) <br>
              臭氧
            </td>
            <td class="subtitle">8小時<br>移動平均</td>
            <td class="nums">{{O3_8hrs}}</td>
          </tr>
          <tr>
            <td class="subtitle">小時<br>濃度</td>
            <td class="nums">{{O3}}</td>
          </tr>
          <tr>
            <td rowspan="2" class="title">
              PM
              <sub>2.5</sub> <br>
              (μg/m
              <sup>3</sup> ) <br>
              細懸浮微粒
            </td>
            <td class="subtitle">移動<br>平均</td>
            <td class="nums">{{PM25_AVG}}</td>
          </tr>
          <tr>
            <td class="subtitle">小時<br>濃度</td>
            <td class="nums">{{PM25}}</td>
          </tr>
          <tr>
            <td rowspan="2" class="title">
              PM
              <sub>10</sub> <br>
              (μg/m
              <sup>3</sup> ) <br>
              懸浮微粒
            </td>
            <td class="subtitle">移動<br>平均</td>
            <td class="nums">{{PM10_AVG}}</td>
          </tr>
          <tr>
            <td class="subtitle">小時<br>濃度</td>
            <td class="nums">{{PM10}}</td>
          </tr>
          <tr>
            <td rowspan="2" class="title">
              CO <br>
              (ppm) <br>
              一氧化碳
            </td>
            <td class="subtitle">8小時移動<br>平均</td>
            <td class="nums">{{CO_8hrs}}</td>
          </tr>
          <tr>
            <td class="subtitle">小時<br>濃度</td>
            <td class="nums">{{CO}}</td>
          </tr>
          <tr>
            <td class="title">
              SO
              <sub>2</sub>
              (ppb)<br>二氧化硫
            </td>
            <td class="subtitle">小時<br>濃度</td>
            <td class="nums">{{SO2}}</td>
          </tr>
          <tr>
            <td class="title">
              NO
              <sub>2</sub>
              (ppb)<br>二氧化氮
            </td>
            <td class="subtitle">小時<br>濃度</td>
            <td class="nums">{{NO2}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
  

</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      site: "",
      area: "",
      info: [],
      time: "",
      AQI: "",
      O3_8hrs: "",
      O3: "",
      PM25_AVG: "",
      PM25: "",
      PM10_AVG: "",
      PM10: "",
      CO_8hrs: "",
      CO: "",
      SO2: "",
      NO2: ""
    }
  },
  created() {
     let xhttp = new XMLHttpRequest();
     let that = this;
     xhttp.onreadystatechange = function() {
       if (this.readyState === 4 && this.status === 200) {
       that.info = (JSON.parse(this.responseText));
       } 
     };
     xhttp.open("GET", "http://opendata2.epa.gov.tw/AQI.json", true);
     xhttp.send();
  },
  computed: {
    AQI_status() {
      if(this.AQI>=0 && this.AQI<=50) {
        return '良好';
      }
      else if(this.AQI>=51 && this.AQI<=100) {
        return '普通';
      }
      else if(this.AQI>=101 && this.AQI<=150) {
        return '對敏感族群不健康';
      }
      else if(this.AQI>=151 && this.AQI<=200) {
        return '對所有族群不健康';
      }
      else if(this.AQI>=201 && this.AQI<=300) {
        return '非常不健康';
      }
      else {
        return '危害';
      }
    }
  },
  methods: {
    selectArea() {
      clearStates();
      let area = document.getElementById('ddl_Area').value;
      switch(area) {
        case 'North': {
          document.getElementById('North').style.display = "inline";
          break;
        }
        case 'Chu-Miao': {
          document.getElementById('Chu-Miao').style.display = "inline";
          break;
        }
        case 'Central': {
          document.getElementById('Central').style.display = "inline";
          break;
        }
        case 'Yun-Chia-Nan': {
          document.getElementById('Yun-Chia-Nan').style.display = "inline";
          break;
        }
        case 'KaoPing': {
          document.getElementById('KaoPing').style.display = "inline";
          break;
        }
        case 'Yilan': {
          document.getElementById('Yilan').style.display = "inline";
          break;
        }
        case 'Hua-Tung': {
          document.getElementById('Hua-Tung').style.display = "inline";
          break;
        }
        case 'Island': {
          document.getElementById('Island').style.display = "inline";
          break;
        }
      }
      for (let i=0; i<8; i++)
        document.querySelectorAll('.ddl_Site')[i].selectedIndex = 0;
    },
    selectSite(index) {
      this.site = document.querySelectorAll('.ddl_Site')[index].value;
      console.log(this.site);
    },
    search() {
      let data = this.info;
      if(this.site==="") this.$alertify.error("請選擇地區");
      this.area = this.site;
      for (let i=0; i<data.length; i++) {
        if(data[i].SiteName===this.area) {
          document.querySelector('#time').style.display = "block";
          this.time = data[i].PublishTime;
          document.querySelector('#result').style.display = "block";
          this.AQI = data[i].AQI;
          this.O3_8hrs = data[i].O3_8hr;
          this.O3 = data[i].O3;
          this.PM25_AVG = data[i]["PM2.5_AVG"];
          this.PM25 = data[i]["PM2.5"];
          this.PM10_AVG = data[i].PM10_AVG;
          this.PM10 = data[i].PM10;
          this.CO_8hrs = data[i].CO_8hr;
          this.CO = data[i].CO;
          this.NO2 = data[i].NO2;
          this.SO2 = data[i].SO2;
        }
      }
      this.site = "";
    }
  }
}
function clearStates() {
  document.getElementById('North').style.display = "none";
  document.getElementById('Chu-Miao').style.display = "none";
  document.getElementById('Central').style.display = "none";
  document.getElementById('Yun-Chia-Nan').style.display = "none";
  document.getElementById('KaoPing').style.display = "none";
  document.getElementById('Yilan').style.display = "none";
  document.getElementById('Hua-Tung').style.display = "none";
  document.getElementById('Island').style.display = "none";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  border-collapse: collapse;
}

table, td, th {
  border-bottom: 1px solid #DDD;
}
.district {
  text-align: center;
}
#North, #Chu-Miao, #Central, #Yun-Chia-Nan,#KaoPing, #Yilan,
#Hua-Tung, #Island  {
  display: none;
}
select {
  height: 25px;
}
#time {
  margin-top: 20px;
  font-weight: 600;
  display: none;
  text-align: center;
}
#result {
  display: none;
  max-width: 400px;
  margin: auto;
  margin-top: 20px;
  border:2px solid #939699;
}
#AQI {
  border-top: 1px solid #939699;
  border-bottom: 1px solid #939699;
  padding: 12px 0;
}
#AQI_site {
  font-size: 36px;
  font-weight: 600;
}
#value {
  float: right;
  font-size: 26px;
  font-weight: 600;
}
#AOI_name {
  font-weight: 600;
  text-decoration: underline;
}
#status {
  float: right;
  font-size: 24px;
  font-weight: 600;
}
.status_good {
  background-color: #00DD00;
}
.status_ordinary {
  background-color: #FFFF00;
}
.status_bad {
  background-color: #FF8800;
}
.status_soBad {
  background-color: #FF0000;
}
.status_danger {
  background-color: #C10066;
}
.status_veryDanger {
  background-color: #8C0044;
}
.title {
  width: 140px;
  font-weight: 600;
}
.subtitle {
  width: 180px;
}
.nums {
  width: 80px;
  text-align: center;
  font-weight: 600;
  font-size: 32px;
}
</style>
