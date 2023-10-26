import {createDom, ToolBox} from "./dom";
import {toolBoxPlugin} from "../index";

let colorList =  ['#FF2318','#9C64A2','#B4C926','#0191B3',
  '#6F6EB9','#9C64A2','#FF291B','#F4AE3C'];
export function* generateColor() {
  let index = 0;
  while(true) {
    yield colorList[index];
    index = (index + 1) % colorList.length;
  }
}

let funcList =
        [
  {
    key:'addChildNode',
    name: '新增子级节点',// 该选项的选项名，当无icon或者img或者setDom时，会以此为准  优先级：setDom>icon>img>name
    // 监听事件名
    event: 'click',
    /**
     * @description 事件对应的回调函数
     * @param self 返回该选项自身
     * @param pen 返回当前操作的pen对象
     * */
    func: async (self,pen)=>{
      toolBoxPlugin.addNode(pen,0);
    },
    // 显示的图标
    img:'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSIzNHB4IiB2aWV3Qm94PSIwIDAgMzQgMzQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+5LiL57qn6IqC54K5PC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjE0IiB5PSIxOCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjciIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgbWFza0NvbnRlbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIG1hc2tVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHg9IjAiIHk9IjAiIHdpZHRoPSIxNiIgaGVpZ2h0PSI3IiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgPC9kZWZzPgogICAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5Zu65a6aIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzM2LjAwMDAwMCwgLTI3LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i57yW57uELTLlpIfku70iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4Mi4wMDAwMDAsIDI0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuS4i+e6p+iKgueCuSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU0LjAwMDAwMCwgMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i6YCP5piO5bqV5Zu+IiBmaWxsLW9wYWNpdHk9IjAiIGZpbGw9IiNGRkZGRkYiIHg9IjAiIHk9IjAiIHdpZHRoPSIzNCIgaGVpZ2h0PSIzNCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaLlpIfku70tNiIgc3Ryb2tlPSIjODE4MTg3IiB4PSI0LjUiIHk9IjguNSIgd2lkdGg9IjE1IiBoZWlnaHQ9IjYiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9IjEyIiB5MT0iMjIiIHgyPSIxNCIgeTI9IjIyIiBpZD0i55u057q/LTciIHN0cm9rZT0iIzgxODE4NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9IjEyIiB5MT0iMTUiIHgyPSIxMiIgeTI9IjIyIiBpZD0i55u057q/LTYiIHN0cm9rZT0iIzgxODE4NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0i55+p5b2i5aSH5Lu9LTUiIHN0cm9rZT0iIzlDOUNBNSIgbWFzaz0idXJsKCNtYXNrLTIpIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjIiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='
    /**
     * @description 通过此函数你可以自由地自定义工具栏的样式 采用影子dom 使得style相互隔离
     * @param self 此配置项自身
     * @param dom 插件提供的包含容器 即你创建的dom的外部div对象
     * @return string dom字符串
     * */
  },
  {
    key:'relayout',
    name:'重新布局',
    icon:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 34 34" version="1.1">\n' +
        '    <title>重新布局</title>\n' +
        '    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
        '        <g id="未固定" transform="translate(-531.000000, -138.000000)" stroke="#818187">\n' +
        '            <g id="编组-2" transform="translate(253.000000, 135.000000)">\n' +
        '                <g id="重新布局" transform="translate(278.000000, 3.000000)">\n' +
        '                    <rect id="矩形备份-6" x="7.5" y="7.5" width="19" height="19" rx="1"/>\n' +
        '                    <line x1="7.5" y1="13.5" x2="26.5" y2="13.5" id="直线-11" stroke-linecap="square"/>\n' +
        '                    <line x1="13.5" y1="13.5" x2="13.5" y2="25.5" id="直线-11备份" stroke-linecap="square"/>\n' +
        '                </g>\n' +
        '            </g>\n' +
        '        </g>\n' +
        '    </g>\n' +
        '</svg>',
    event:'click',
    func(self,pen,dom,father){
      let children = pen.mind?.children || [];
      if(children.length >0){
        toolBoxPlugin.update(pen,true);
      }
    },
    // setDom(self,dom){
    //   // draw your dom freeDom！！！
    //   let result =  `<span>${self.name}</span>`;
    //   return result;
    // }
  },
  {
    key:'relayoutNext',
    description:'',
    name:'重新布局下一级',
    icon:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 34 34" version="1.1">\n' +
        '    <title>重新布局下一级</title>\n' +
        '    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
        '        <g id="未固定" transform="translate(-577.000000, -138.000000)" stroke="#818187">\n' +
        '            <g id="编组-2" transform="translate(253.000000, 135.000000)">\n' +
        '                <g id="仅重布局子集" transform="translate(324.000000, 3.000000)">\n' +
        '                    <rect id="矩形备份-6" x="7.5" y="7.5" width="19" height="19" rx="1"/>\n' +
        '                    <line x1="7.5" y1="13.5" x2="26.5" y2="13.5" id="直线-11" stroke-linecap="square"/>\n' +
        '                    <line x1="14.325" y1="18.5" x2="26.325" y2="18.5" id="直线-11备份-4" stroke-linecap="square"/>\n' +
        '                    <line x1="14.325" y1="23.5" x2="26.325" y2="23.5" id="直线-11备份-5" stroke-linecap="square"/>\n' +
        '                    <line x1="13.5" y1="13.5" x2="13.5" y2="25.5" id="直线-11备份" stroke-linecap="square"/>\n' +
        '                    <line x1="17.5" y1="13.5" x2="17.5" y2="25.5" id="直线-11备份-2" stroke-linecap="square"/>\n' +
        '                    <line x1="22.5" y1="13.5" x2="22.5" y2="25.5" id="直线-11备份-3" stroke-linecap="square"/>\n' +
        '                </g>\n' +
        '            </g>\n' +
        '        </g>\n' +
        '    </g>\n' +
        '</svg>',
    event:'click',
    func(self,pen){
      let children = pen.mind?.children || [];
      if(children.length >0){
        toolBoxPlugin.update(pen,false);
      }
    }
  },
  {
    key:'nodeStyle',
    name:'边框样式',
    color:'#4D4DFF',
    dash:'5,5',
    width:4,
    /**
     * @description 初始化函数
     * @param self 配置项本身
     * @param pen 木匾画笔
     */
    init(self,pen){
      console.log("执行init",pen)
      console.log(pen.lineDash,'lineDash')
      self.dash = pen.lineDash ? `${pen.lineDash[0]},${pen.lineDash[1]}` : '0,0'
    },
    setDom(self){
      let color = self.color
      let dash = self.dash;
      let width = self.width;
      let HTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 34 34" version="1.1">
                    <title>边框样式</title>
                    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="未固定" transform="translate(-628.000000, -138.000000)">
                            <g id="编组-2" transform="translate(253.000000, 135.000000)">
                                <g id="边框颜色" transform="translate(375.000000, 3.000000)">
                                    <rect id="透明底图" fill-opacity="0" fill="#FFFFFF" x="0" y="0" width="34" height="34"/>
                                    <circle id="椭圆形" stroke="${color}" stroke-width="${width}" cx="17" cy="17" r="8" stroke-dasharray="${dash}"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>`
      return HTML
    },
    children: [
      {
        name:'直线',
        event: 'click',
        func(self, pen, dom, father) {
          meta2d.setValue({id:pen.id,lineDash:[0,0]})
          father.dash = '0,0';
          toolbox.renderChildren()
        }
      },
      {
        name:'虚线',
        event: 'click',
        func(self, pen, dom, father) {
          meta2d.setValue({id:pen.id,lineDash:[5,5]})
          father.dash = '5,5';
          toolbox.renderChildren()
        }
      }
    ]
  },
  {
    key:'lineStyle',
    name:'线条样式',
    color:'#4D4DFF',
    dash: '0,0',
    width: 4,
    init(self,pen){
      console.log(self,pen)
      self.color = pen.calculative.color || '#000'
    },
    setDom(self) {
      let html = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 34 34" version="1.1">
        <title>连线样式</title>
        <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="未固定" transform="translate(-674.000000, -138.000000)">
            <g id="编组-2" transform="translate(253.000000, 135.000000)">
              <g id="连线颜色" transform="translate(421.000000, 3.000000)">
                <rect id="透明底图" fill-opacity="0" fill="#FFFFFF" x="0" y="0" width="34" height="34"/>
                <line x1="7.5" y1="17.5" x2="27.5" y2="17.5" id="直线-9" stroke="${self.color}" stroke-dasharray="${self.dash}" stroke-width="${self.width}" stroke-linecap="round"/>
              </g>
            </g>
          </g>
        </g>
      </svg>`
      return html
    },
    /**
     * @description 设置下拉框的样式，你也可以使用webComponent，或者将vue组件转换为webComponent
     * @param self 本配置对象
     * @param pen 返回当前pen对象
     * @param dom 返回此容器dom
     * */
    children: [
      {
        name: '红色',
        event: 'click',
        func(self,pen,dom,father){
          father.color = 'red';
          meta2d.setValue({id:pen.id,color:'red'})
          toolbox.renderChildren()
        },
        setDom(self,pen){
          let html = `<span>${self.name}</span>`
          let css = `
            <style>
            span{
            color:red;
            font-size: 30px;
            }
</style
          `;
          let dom = createDom('span',{color:'red',fontSize:'30px'})
          dom.attachShadow({mode:"open"}).innerHTML = html+css
          return dom
        }
      },
      {
        name:'绿色',
        event: 'click',
        func(self,pen,dom,father){
          father.color = 'green';
          meta2d.setValue({id:pen.id,color:'green'})
          toolbox.renderChildren()
        },
      }
    ],
    setChildrenDom(self, pen){
      let dom = createDom('div',{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        position:'absolute',
        visibility:'hidden',
        top:'50px',
        backgroundColor:'#fff',
        borderRadius:'5px',
        padding:'3px',
        width: '185px',
        boxShadow: '0px 6px 20px rgba(25,25,26,.06), 0px 2px 12px rgba(25,25,26,.04)',
      });
      dom.innerHTML = `<style>
.toolbox_item:hover{
    background-color:#6b6b6b;
}
</style>`
      return dom ;
    }
  },{
    key:'connectMode',
    name:'连线方式',
    // 隐藏下拉列表是触发
    onHideChildDom(){
      return false
    },
    // 下拉框元素列表  可通过setDom方法改变自身
    children:[
      {
        name:'脑图曲线',
        event:'click',
        func(self,pen){
          let root = (window).meta2d.findOne(pen.mind.rootId);
          root.mind.lineStyle = 'curve';
          toolBoxPlugin.resetLineStyle(root);
          toolBoxPlugin.update(root);
        }
      },
      {
        name:'折线',
        event:'click',
        func(self,pen){
          let root = (window).meta2d.findOne(pen.mind.rootId);
          root.mind.lineStyle = 'polyline';
          toolBoxPlugin.resetLineStyle(root);
          toolBoxPlugin.update(root);
        }
      }
    ]
  },
  {
    key:'layoutDirection ',
    name:'布局方式',
    event: 'click',
    onHideChildDom(){
      console.log('hide')
    },
    func(self,pen,dom){
      let root = dom.shadowRoot.querySelector('.root');
      let divs = root.querySelectorAll('div');
      let index = self.children.findIndex(i=>i.key === pen.mind.direction);
      divs.forEach(i=>{
        i.querySelectorAll('.toolbox_direction_svg').forEach(i=>{
          i.setAttribute('fill','#DDDDE1');
        });
        i.querySelectorAll('.toolbox_direction_svg_base').forEach(i=>{
          i.setAttribute('fill','#F8F8FC');
        });
        i.querySelectorAll('.toolbox_direction_svg_line').forEach(i=>{
          i.setAttribute('stroke','#818187');
        });
      });

      divs[index].querySelector('.toolbox_direction_svg_base').setAttribute('fill','#CDCDFC');
      divs[index].querySelector('.toolbox_direction_svg_line').setAttribute('stroke','#7878FF');
      divs[index].querySelectorAll('.toolbox_direction_svg').forEach(i=>i.setAttribute('fill','#7878FF'));
    },
    children:[
      {
        key:'right',
        name:'',
        event:'click',
        icon:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="76px" height="50px" viewBox="0 0 76 50" version="1.1">\n' +
            '    <title>向右布局 9</title>\n' +
            '    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
            '        <g id="未固定" transform="translate(-633.000000, -684.000000)">\n' +
            '            <g id="编组-6备份" transform="translate(525.000000, 423.000000)">\n' +
            '                <g id="布局备份-9" transform="translate(108.000000, 261.000000)">\n' +
            '                    <rect class="toolbox_direction_svg_base" id="偷摸底图" fill="#F8F8FC" x="0" y="0" width="76" height="50" rx="2"/>\n' +
            '                    <g id="编组-3" transform="translate(20.000000, 7.000000)">\n' +
            '                        <line class="toolbox_direction_svg" x1="13.5" y1="18.5" x2="22.969697" y2="18.5" id="直线-12备份-2" stroke="#818187" stroke-linecap="round"/>\n' +
            '                        <rect class="toolbox_direction_svg_line" id="矩形" stroke="#818187" x="0.5" y="15.5" width="13" height="5" rx="2"/>\n' +
            '                        <path class="toolbox_direction_svg_line" d="M28,35 C22.4771525,35 18,27.836556 18,19 C18,10.163444 22.4771525,3 28,3" id="路径" stroke="#818187" stroke-linecap="round"/>\n' +
            '                        <rect class="toolbox_direction_svg" id="矩形备份-11" fill="#DDDDE1" x="25" y="0" width="10" height="5" rx="2"/>\n' +
            '                        <rect class="toolbox_direction_svg" id="矩形备份-12" fill="#DDDDE1" x="25" y="16" width="10" height="5" rx="2"/>\n' +
            '                        <rect class="toolbox_direction_svg" id="矩形备份-13" fill="#DDDDE1" x="25" y="32" width="10" height="5" rx="2"/>\n' +
            '                    </g>\n' +
            '                </g>\n' +
            '            </g>\n' +
            '        </g>\n' +
            '    </g>\n' +
            '</svg>',
        func(self,pen){
          let root = (window).meta2d.findOne(pen.mind.rootId);
          toolBoxPlugin.resetLinePos(root,'right',true)
          // toolBoxPlugin.resetDirection(root,'right',true);
          toolBoxPlugin.update(root);
        }
      },
      {
        name:'',
        key:'left',
        event:'click',
        icon:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="76px" height="50px" viewBox="0 0 76 50" version="1.1">\n' +
            '    <title>布局备份 8</title>\n' +
            '    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
            '        <g id="未固定" transform="translate(-541.000000, -684.000000)">\n' +
            '            <g id="编组-6备份" transform="translate(525.000000, 423.000000)">\n' +
            '                <g id="布局备份-8" transform="translate(16.000000, 261.000000)">\n' +
            '                    <rect class="toolbox_direction_svg_base" id="透明底图" fill="#F8F8FC" x="0" y="0" width="76" height="50" rx="2"/>\n' +
            '                    <g id="编组-3" transform="translate(37.500000, 25.500000) scale(-1, 1) translate(-37.500000, -25.500000) translate(20.000000, 7.000000)">\n' +
            '                        <line class="toolbox_direction_svg" x1="13.5" y1="18.5" x2="22.969697" y2="18.5" id="直线-12备份-2" stroke="#818187" stroke-linecap="round"/>\n' +
            '                        <rect class="toolbox_direction_svg_line" id="矩形" stroke="#818187" x="0.5" y="15.5" width="13" height="5" rx="2"/>\n' +
            '                        <path class="toolbox_direction_svg_line" d="M28,35 C22.4771525,35 18,27.836556 18,19 C18,10.163444 22.4771525,3 28,3" id="路径" stroke="#818187" stroke-linecap="round"/>\n' +
            '                        <rect class="toolbox_direction_svg" id="矩形备份-11" fill="#DDDDE1" x="25" y="0" width="10" height="5" rx="2"/>\n' +
            '                        <rect class="toolbox_direction_svg" id="矩形备份-12" fill="#DDDDE1" x="25" y="16" width="10" height="5" rx="2"/>\n' +
            '                        <rect class="toolbox_direction_svg" id="矩形备份-13" fill="#DDDDE1" x="25" y="32" width="10" height="5" rx="2"/>\n' +
            '                    </g>\n' +
            '                </g>\n' +
            '            </g>\n' +
            '        </g>\n' +
            '    </g>\n' +
            '</svg>',
        func(self,pen){
          let root = (window).meta2d.findOne(pen.mind.rootId);
          toolBoxPlugin.resetLinePos(root,'left',true);
          toolBoxPlugin.update(root);
        }
      },
      {
        name:'',
        key:'top',
        event:'click',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="76px" height="50px" viewBox="0 0 76 50" version="1.1">\n' +
            '    <title>布局备份 7</title>\n' +
            '    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
            '        <g id="未固定" transform="translate(-633.000000, -616.000000)">\n' +
            '            <g id="编组-6备份" transform="translate(525.000000, 423.000000)">\n' +
            '                <g id="布局备份-7" transform="translate(108.000000, 193.000000)">\n' +
            '                    <rect class="toolbox_direction_svg_base" id="透明底图" fill="#F8F8FC" x="0" y="0" width="76" height="50" rx="2"/>\n' +
            '                    <g id="编组-3" transform="translate(38.000000, 25.250000) scale(1, -1) rotate(-270.000000) translate(-38.000000, -25.250000) translate(25.750000, 0.750000)">\n' +
            '                        <line class="toolbox_direction_svg" x1="6.06363636" y1="25.5" x2="15.5333333" y2="25.5" id="直线-12备份-2" stroke="#818187" stroke-linecap="round"/>\n' +
            '                        <rect class="toolbox_direction_svg_line" id="矩形" stroke="#818187" transform="translate(3.000000, 25.500000) rotate(-90.000000) translate(-3.000000, -25.500000) " x="-3.5" y="23" width="13" height="5" rx="2"/>\n' +
            '                        <path class="toolbox_direction_svg_line" d="M17.8386311,43 C15.0303966,40.513797 13,33.3135934 13,24.8187892 C13,16.7047472 14.8524591,9.77185117 17.465812,7" id="路径" stroke="#818187" stroke-linecap="round"/>\n' +
            '                        <rect class="toolbox_direction_svg" id="矩形备份-11" fill="#DDDDE1" transform="translate(22.000000, 44.000000) rotate(-90.000000) translate(-22.000000, -44.000000) " x="17" y="41.5" width="10" height="5" rx="2"/>\n' +
            '                        <rect class="toolbox_direction_svg" id="矩形备份-12" fill="#DDDDE1" transform="translate(22.000000, 25.000000) rotate(-90.000000) translate(-22.000000, -25.000000) " x="17" y="22.5" width="10" height="5" rx="2"/>\n' +
            '                        <rect class="toolbox_direction_svg" id="矩形备份-13" fill="#DDDDE1" transform="translate(22.000000, 5.000000) rotate(-90.000000) translate(-22.000000, -5.000000) " x="17" y="2.5" width="10" height="5" rx="2"/>\n' +
            '                    </g>\n' +
            '                </g>\n' +
            '            </g>\n' +
            '        </g>\n' +
            '    </g>\n' +
            '</svg>',
        func(self,pen){
          let root = (window).meta2d.findOne(pen.mind.rootId);
          toolBoxPlugin.resetLinePos(root,'top',true);
          toolBoxPlugin.update(root);
        }
      },
      {
        name:'',
        key:'bottom',
        icon:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="76px" height="50px" viewBox="0 0 76 50" version="1.1">\n' +
            '    <title>布局备份 2</title>\n' +
            '    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
            '        <g id="未固定" transform="translate(-725.000000, -480.000000)">\n' +
            '            <g id="编组-6备份" transform="translate(525.000000, 423.000000)">\n' +
            '                <g id="布局备份-2" transform="translate(200.000000, 57.000000)">\n' +
            '                    <rect class="toolbox_direction_svg_base" id="透明底图" fill="#F8F8FC" x="0" y="0" width="76" height="50" rx="2"/>\n' +
            '                    <g id="编组-3" transform="translate(38.000000, 25.250000) rotate(-270.000000) translate(-38.000000, -25.250000) translate(25.750000, 0.750000)">\n' +
            '                        <line x1="6.06363636" y1="25.5" x2="15.5333333" y2="25.5" id="直线-12备份-2" stroke="#818187" stroke-linecap="round"/>\n' +
            '                        <rect class="toolbox_direction_svg_line" id="矩形" stroke="#818187" transform="translate(3.000000, 25.500000) rotate(-90.000000) translate(-3.000000, -25.500000) " x="-3.5" y="23" width="13" height="5" rx="2"/>\n' +
            '                        <path class="toolbox_direction_svg_line" d="M17.8386311,43 C15.0303966,40.513797 13,33.3135934 13,24.8187892 C13,16.7047472 14.8524591,9.77185117 17.465812,7" id="路径" stroke="#818187" stroke-linecap="round"/>\n' +
            '                        <rect class="toolbox_direction_svg" id="矩形备份-11" fill="#DDDDE1" transform="translate(22.000000, 44.000000) rotate(-90.000000) translate(-22.000000, -44.000000) " x="17" y="41.5" width="10" height="5" rx="2"/>\n' +
            '                        <rect class="toolbox_direction_svg" id="矩形备份-12" fill="#DDDDE1" transform="translate(22.000000, 25.000000) rotate(-90.000000) translate(-22.000000, -25.000000) " x="17" y="22.5" width="10" height="5" rx="2"/>\n' +
            '                        <rect class="toolbox_direction_svg" id="矩形备份-13" fill="#DDDDE1" transform="translate(22.000000, 5.000000) rotate(-90.000000) translate(-22.000000, -5.000000) " x="17" y="2.5" width="10" height="5" rx="2"/>\n' +
            '                    </g>\n' +
            '                </g>\n' +
            '            </g>\n' +
            '        </g>\n' +
            '    </g>\n' +
            '</svg>',
        event:'click',
        func(self,pen){
          let root = (window).meta2d.findOne(pen.mind.rootId);
          toolBoxPlugin.resetLinePos(root,'bottom',true);
          toolBoxPlugin.update(root);
        }
      },
    ],
    // 设置下拉列表的样式和子元素布局
    setChildrenDom(self,pen){
      let dom = createDom('div',{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        position:'absolute',
        visibility:'hidden',
        top:'50px',
        backgroundColor:'#fff',
        borderRadius:'5px',
        padding:'3px',
        zIndex: 999,
        width: '185px',
        boxShadow: '0px 6px 20px rgba(25,25,26,.06), 0px 2px 12px rgba(25,25,26,.04)',
      },'',undefined,'root');
      dom.innerHTML = `
        <style>
         .active {
          border-color: red;
          border-width: 5px;
        }
        </style>
       `;
      dom.addEventListener('click',(e)=>{
        dom.childNodes.forEach((i)=>{
          if(i.tagName !== 'style' && i.nodeType == 1){
            i.classList.remove('active');
          }
        });
        e.target.classList.add('active');
      });
      return dom ;
    }
  },
{
  key:'addSiblingNode',
  name: '新增同级节点',
  event: 'click',
  func: async (self,pen)=>{
    let parent = (window).meta2d.findOne(pen.mind.preNodeId);
    let index = parent.mind.children.indexOf(pen);
    await toolBoxPlugin.addNode(parent,index+1);
  },
  img:'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSIzNHB4IiB2aWV3Qm94PSIwIDAgMzQgMzQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+5ZCM57qn6IqC54K5PC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjkiIHk9IjgiIHdpZHRoPSIxNiIgaGVpZ2h0PSI3Ij48L3JlY3Q+CiAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgbWFza0NvbnRlbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIG1hc2tVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHg9IjAiIHk9IjAiIHdpZHRoPSIxNiIgaGVpZ2h0PSI3IiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgPC9kZWZzPgogICAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5Zu65a6aIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjkwLjAwMDAwMCwgLTI3LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i57yW57uELTLlpIfku70iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4Mi4wMDAwMDAsIDI0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuWQjOe6p+iKgueCuSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA4LjAwMDAwMCwgMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i6YCP5piO5bqV5Zu+IiBmaWxsLW9wYWNpdHk9IjAiIGZpbGw9IiNGRkZGRkYiIHg9IjAiIHk9IjAiIHdpZHRoPSIzNCIgaGVpZ2h0PSIzNCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIHN0cm9rZT0iIzgxODE4NyIgeD0iOS41IiB5PSIxOC41IiB3aWR0aD0iMTUiIGhlaWdodD0iNiIgcng9IjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT0iMTciIHkxPSIxNSIgeDI9IjE3IiB5Mj0iMTgiIGlkPSLnm7Tnur8tNiIgc3Ryb2tlPSIjODE4MTg3IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSLnn6nlvaLlpIfku70tNCIgc3Ryb2tlPSIjOUM5Q0E1IiBtYXNrPSJ1cmwoI21hc2stMikiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iMiIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=='
  },
]

export var defaultFuncs = {
  funcList,
  getAllFuncDocs(){
    return this.funcList.map(i=>({name:i.name,key:i.key,description:i.description||'暂无描述'}))
  },
  getFunc(...key){
    let result = []
    if(Array.isArray(key)){
      key.forEach((i)=>{
        let func =this.funcList.find(j=> j.key === i)
        func ? result.push(func) : console.warn(`[defaultFuncs warn]：No matching options ${i}`)
      })
    }
    return result
  }
}
export let defaultFuncList = {
  'root':funcList.filter(i=>i.key!== 'addSiblingNode'),
  'leaf':defaultFuncs.getFunc('addChildNode','addSiblingNode','relayout','relayoutNext','nodeStyle','lineStyle',)
};


