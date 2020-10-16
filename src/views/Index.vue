<template>
  <div id="login">
    <div class="login-warp">
      <ul class="menu-tab">
        <li v-for="menuTab in menuTabs" :key="menuTab.id" :class="{'current': menuTab.current}" @click="toggleMenu(menuTab)">{{menuTab.text}}</li>
      </ul>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form" size="medium">
        <el-form-item prop="username">
          <label>用户名</label>
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <label>密码</label>
          <el-input type="password" v-model="ruleForm.password" maxlength="20" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="checkCode">
          <label>验证码</label>
          <el-row :gutter="10">
            <el-col :span="14"><el-input v-model.number="ruleForm.checkCode"></el-input></el-col>
            <el-col :span="10"><el-button type="success" class="login-form-btn">获取验证码</el-button></el-col>
          </el-row>
          
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" class="login-form-btn">提交</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="resetForm('ruleForm')" class="login-form-btn">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    var validateUsername = (rule, value, callback) => {
      if(value === '') {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    var checkCheckCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'));
      } else {
        callback();
      }
    };
    return {
      menuTabs: [
        { text: '登录', current: true },
        { text: '注册', current: false }
      ],
      ruleForm: {
        username: '',
        password: '',
        checkCode: ''
      },
      rules: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' }
        ],
        checkCode: [
          { validator: checkCheckCode, trigger: 'blur' }
        ]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    toggleMenu(data) {
      //点击后先全部false然后重新赋值
      this.menuTabs.forEach(elem => {
        elem.current = false;
      })
      data.current = true
    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  };
</script>

<style scoped>
#login {
  height: 100vh;
  background-color: #344a5f;
}

.login-warp {
  width: 330px;
  margin: auto;
}

.menu-tab {
  margin: 0px;
  text-align: center;
}

.menu-tab li {
  display: inline-block;
  width: 88px;
  line-height: 36px;
  font-size: 14px;
  color: #fff;
  border-radius: 2px;
  cursor: pointer;
}

.current {
  background-color: rgba(0, 0, 0, .1);
}

.login-form label {
  display: block;
  font-size: 14px;
  color: #fff;
}

.login-form-btn {
  display: block;
  width: 100%;
}
</style>