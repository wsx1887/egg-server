'use strict';

const Controller = require('egg').Controller;
const Axios = require('axios');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async request() {
    const { ctx } = this;
    const res = await Axios.get('', { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' });
    // console.log(res);
    ctx.set({ 'Content-Type': 'text/html; charset=gbk' });
    ctx.body = res.data;
  }
}

module.exports = HomeController;
