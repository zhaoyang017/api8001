/**
 * Created by yqh1 on 2018/1/14.
 */
var info = {
    "rules": `
        一、兑换码有效期<br/>
        （1）原则上兑奖码有效期为2018年1月31日至12月31日，但由于礼品数量有限，建议尽快登入平台进行兑换。<br/>
        二、参加资格<br/>
        （1）从渣打银行官方渠道的实体卡片、SMS等获得礼品兑换码，即可登入平台进行兑换；以下简称“持码客户”<br/>
        （2）持码客户或非持码客户如有下述任一情形：利用网络延迟或系统漏洞进行重复兑换的、擅自猜测礼品兑奖码并成功进行兑换的、从非官方渠道骗取兑换码进行兑换的，我们有权利向渣打银行汇报相关情况，并由渣打银行决定是否追究其法律责任和赔偿因此造成的损失，包括经济和名誉损失等。<br/>
        三、兑换码适用范围<br/>
        （1）本兑换码只适用于兑换指定渠道的特定礼品，相关可兑换礼品请登入H5礼品兑换平台查看，不适用于任何其他渠道和平台。<br/>
        四、礼品兑换流程<br/>
        （1）实体卡：从官方渠道获得实体卡后，根据卡片背面说明进行操作兑换。<br/>
        （2）SMS：从官方渠道获得短信或微信推送等后，点击链接或扫描二维码登入H5平台进行兑换。<br/>
        五、兑换码的说明<br/>
        （1）兑换码具有唯一性，一个兑换码只能兑换对应的一个奖品，重复或多次兑换无效。<br/>
        （2）请妥善保管您的礼品兑换码，兑换码不记名、不挂失、不补办、不可兑现或抵扣、不提供发票，并请在有效期内使用。<br/>
        六、关于礼品<br/>
        （1）礼品由渣打银行委托我司进行第三方采购及配送，若因第三方提供的礼品缺货或停产，我们会在H5平台的公告栏发出公告作出提醒，持码客户可选择其他对应礼品，若所有礼品均无法选择请及时与我们联系，我们会与渣打银行相关部门协商更换其他礼品，并公示提醒大家。<br/>
        七、关于配送<br/>
        （1）持码客户在平台成功兑换礼品后，我们会及时安排发货，送货时效一般为6-10个工作日，其中2个工作日为订单处理，配送时效为7个工作日，遇周末或节假日时效将顺延，偏远地区以最终实际配送时间为准。<br/>
        八、隐私保护<br/>
        （1）请确保您在平台中所登记的信息真实且有效，以便于工作人员可以及时与您取得联系，处理礼品发放中遇到的紧急情况。当然，我们会保护好您的个人隐私安全，未经您的授权我们不会给任何与流程无关的第三方相关信息。<br/>
        九、咨询与服务<br/>
        （1）我们的热线电话是021-60377599，接待时间为工作日的10:00-17:00。<br/>
        十、解释权<br/>
        （1）最终解释权归渣打银行授权的供应商【上海沃德达彼思广告有限公司】所有。<br/>

    `
};

var product1 = [
    {
        'gift_photo': '../res/vvip/images/gift/gift1.png',
        'gift_title': '<div class="gift_sTitle">故宫典藏</div><div class="gift_lTitle">万福如意礼盒</div>',
        'infoText': '<p class="infoText_size">产品尺寸：255L x 380W x 50H (mm)</p>' +
        '<p class="infoText_feature">产品特点：</p>' +
        '<p>1、数量有限，特供150份，兑完即止；</p>' +
        '<p>2、万福宫灯，参照清代六角挂灯设计而成，传统文化融入其中，自己动手组装，意趣十足；</p>' +
        '<p>3、“福禄”、“福寿”、“福叠”精美红包入册，寓意美好，精美独特；</p>' +
        '<p>4、春联·福字，乾隆帝手书“福”字，贴于太上皇中乐寿堂的楹联作为春联；</p>' +
        '<p>5、宫灯（355mm含穗）、红包（165x85mm）、福字（350mm正方）、横批（600x160mm）、对联（980x160mm）</p>' +
        '<p>注：详情已礼品实物为准</p>'
    },
    {
        'gift_photo': '../res/vvip/images/gift/gift2.png',
        'gift_title': '<div class="gift_sTitle">有钱花</div><div class="gift_lTitle">世界花卉外币精选壁挂</div>',
        'infoText': '<p class="infoText_size">产品尺寸：535L x 430W x 15H (mm)</p>' +
        '<p class="infoText_feature">产品特点：</p>' +
        '<p>1、主图为枝繁叶茂的大树，形如“摇钱树”；</p>' +
        '<p>2、精选意大利、奥地利、俄罗斯等世界30多个国家的花卉硬币一枚；</p>' +
        '<p>3、花卉硬币经世界各国设计师精心设计；</p>' +
        '<p>4、每盒有钱花附唯一编号的收藏证书</p>' +
        '<p>5、寓意美好，创意独特，收藏和送礼俱佳；</p>' +
        '<p>注：详情已礼品实物为准</p>'
    },
    {
        'gift_photo': '../res/vvip/images/gift/gift3.png',
        'gift_title': '<div class="gift_sTitle">乐柏美</div><div class="gift_lTitle">保冰保温箱</div>',
        'infoText': '<p class="infoText_size">产品尺寸：260L x 190W x 200H (mm)</p>' +
        '<p class="infoText_feature">产品特点：</p>' +
        '<p>1、配合乐柏美原装蓝冰，超长保冰，最长可达20小时；</p>' +
        '<p>2、Microban鄀菌涂层，有效抑制细菌滋生，清洁简便，防霉防异味；</p>' +
        '<p>3、设计新颖，无须用电，节能环保，便于携带；</p>' +
        '<p>4、适用场所，车内、家用或医用等；</p>' +
        '<p>5、适用场景，郊游、运动、露营、狩猎、钓鱼、长途旅行等；</p>' +
        '<p>6、推荐用于食物、饮料的保鲜、保温或冷藏；</p>' +
        '<p>注：详细功能和操作请见《产品使用说明书》</p>'
    },
];


var product2 = [
    {
        'gift_photo': '../res/vvip/images/gift/gift4.png',
        'gift_title': '<div class="gift_sTitle">碧然德</div><div class="gift_lTitle">电热滤水壶</div>',
        'infoText': '<p class="infoText_size">产品尺寸：260L x 175W x 360H (mm)</p>' +
        '<p class="infoText_feature">产品特点：</p>' +
        '<p>1、出水水量随心调</p>' +
        '<p>2、操作简便，一键完成烧水</p>' +
        '<p>3、防干烧保护</p>' +
        '<p>4、智能电子Memo提醒没四周更换一次滤芯</p>' +
        '<p>5、手动停水键，随时停止出水</p>' +
        '<p>6、可拆卸滴水盘</p>' +
        '<p>7、食品级材质加热组件</p>' +
        '<p>8、注水方便，内附大容量注水杯</p>' +
        '<p>9、内置多效滤芯一枚</p>' +
        '<p>注：详细功能和操作请见《产品使用说明书》</p>'
    },
    {
        'gift_photo': '../res/vvip/images/gift/gift5.png',
        'gift_title': '<div class="gift_sTitle">佳能</div><div class="gift_lTitle">手机照片打印机</div>',
        'infoText': '<p class="infoText_size">产品尺寸：180L x 140W x 63H (mm)</p>' +
        '<p class="infoText_feature">产品特点：</p>' +
        '<p>1、无线传输打印，任意连接，打印更方便；</p>' +
        '<p>2、染料热升华打印技术，平滑过渡，色彩鲜艳；</p>' +
        '<p>3、照片自动优化；/p>' +
        '<p>4、用电池更便携（电池需另购）</p>' +
        '<p>5、多种尺寸打印，不同相纸可打印不同尺寸照片；</p>' +
        '<p>6、丰富趣味打印，多种布局、滤镜、效果可选；</p>' +
        '<p>7、小巧便携，美观机身</p>' +
        '<p>注：详细功能和操作请见《产品使用说明书》</p>'
    },
    {
        'gift_photo': '../res/vvip/images/gift/gift6.png',
        'gift_title': '<div class="gift_sTitle">科沃斯</div><div class="gift_lTitle">智能扫地机器人超薄二代</div>',
        'infoText': '<p class="infoText_size">产品尺寸：300L x 300W x 57H (mm)</p>' +
        '<p class="infoText_feature">产品特点：</p>' +
        '<p>1、高效劲能电机，持久动力超强吸力；</p>' +
        '<p>2、方形结构边角清扫更到位；</p>' +
        '<p>3、双块电池设计，续航更持久；</p>' +
        '<p>4、多种清扫模式，满足不同需求；</p>' +
        '<p>5、智能定时预约，自动返回充电；</p>' +
        '<p>6、智能防撞感应，温柔呵护家具；</p>' +
        '<p>7、智能越障爬坡，轻松跨越压线条；</p>' +
        '<p>注：详细功能和操作请见《产品使用说明书》</p>'
    },
    {
        'gift_photo': '../res/vvip/images/gift/gift7.png',
        'gift_title': '<div class="gift_sTitle">象印</div><div class="gift_lTitle">多功能电火锅</div>',
        'infoText': '<p class="infoText_size">产品尺寸：385L x 350W x 22H (mm)</p>' +
        '<p class="infoText_feature">产品特点：</p>' +
        '<p>1、多档火力，煎烤煮炖，随需切换；</p>' +
        '<p>2、大面积加热盘，快速导热，锁定美味；</p>' +
        '<p>3、内径304mm，超大两片锅设计；</p>' +
        '<p>4、主体采用食品级不锈钢材质，不沾污易清洗，经久耐用；</p>' +
        '<p>5、强化树脂把手，防烫易挪；</p>' +
        '<p>注：详细功能和操作请见《产品使用说明书》</p>'
    }
];
(function () {
    init();
    //存放表单数据
    var orderForm = {}

    function init() {
        var tips = new shake($('#page3_tips')[0], 30, 70);
        orderForm();
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'vertical'
        });
        // page3信息验证
        var page3_tips = new shake($('.page3 p')[0], 20, 70);
        $('.confrim').click(function () {
            var val = $('.page3 input').val();
            var regVal = /^[A-Z]\d{7}$/
            if (!regVal.test(val)) {
                $('#page3_tips').html('<p id="page3_tips" style="color: red">您输入的兑奖码有误</p>');
                tips.start();
                setTimeout(function () {
                    tips.stop();
                }, 500)
                return;
            }


            $.ajax({
                url: 'http://api8001.test/api/sc/code',
                type: 'POST',
                data: {'code': val},
                success: function (res) {
                    if (res === 'true') {
                        orderForm.code = $('.page3 input').val();
                        if (val.substring(0, 1) == "V" || val.substring(0, 1) == "A") {
                            $('.gift_select2').show().siblings().hide();
                        } else if (val.substring(0, 1) == "B") {
                            $('.gift_select').show().siblings().hide();
                        }
                    } else {
                        $('#page3_tips').html('<p id="page3_tips" style="color: red">您输入的兑奖码有误</p>');
                        tips.start();
                        setTimeout(function () {
                            tips.stop();
                        }, 500)
                    }
                },
                error: function (res) {
                    $('#page3_tips').html('<p id="page3_tips" style="color: red">您输入的兑奖码有误</p>');
                    tips.start();
                    setTimeout(function () {
                        tips.stop();
                    }, 500)
                }
            })
        })

        //条款与细则弹框
        $('.rules').click(function () {
            layer.open({
                type: 0,
                title: '条款与细则',
                content: '<div>' + info.rules + '</div>',
                btn: '关闭',
            });
        })

        //抖动函数
        function shake(obj, Rate, speed) {
            var oL = obj.offsetLeft;
            var oT = obj.offsetTop;
            this.stop = null;
            this.timer = null;
            var self = this;
            this.start = function () {
                if (parseInt(obj.style.left) == oL - 2) {
                    obj.style.top = /*oT*/ +2 + "px";
                    setTimeout(function () {
                        obj.style.left = oL + 2 + "px"
                    }, Rate)
                } else {
                    obj.style.top = /*oT*/ -2 + "px";
                    setTimeout(function () {
                        obj.style.left = oL - 2 + "px"
                    }, Rate)
                }
                this.timer = setTimeout(function () {
                    self.start()
                }, speed);
            }
            this.stop = function () {
                clearTimeout(this.timer);
            }
        }


        var giftIndex = 1;
        //礼品选择
        $('.gift_select li').click(function () {
            if ($(this).find('span').eq(0).attr('class') == 'hidden') {
                alert('当前礼品库存不足，请重新选择')

            } else {
                giftIndex = 1;
                var index = $(this).index();
                orderForm.gift = "gift" + (index + 1);
                $('#gift_photo').attr('src', product1[index].gift_photo);
                $('#gift_title').html(product1[index].gift_title);
                $('.infoText').html(product1[index].infoText);
                $('.gift').show().siblings().hide();
            }

        })
        $('.gift_select2 li').click(function () {
            if ($(this).find('span').eq(0).attr('class') == 'hidden') {
                alert('当前礼品库存不足，请重新选择')
            } else {
                giftIndex = 2;
                var index = $(this).index();
                orderForm.gift = "gift" + (index + 4);
                $('#gift_photo').attr('src', product2[index].gift_photo);
                $('#gift_title').html(product2[index].gift_title);
                $('.infoText').html(product2[index].infoText);
                $('.gift').show().siblings().hide();
            }

        })
        //返回
        $('.btn_return').click(function () {
            if (giftIndex == 1) {
                $('.gift_select').show().siblings().hide();
            } else if (giftIndex == 2) {
                $('.gift_select2').show().siblings().hide();
            }
        })
        //确认
        $('.btn_comfirm').click(function () {
            $('.orderForm').show().siblings().hide();
        })
    }

    //基本信息页验证
    function orderForm() {
        var regPhone = /^\d{11}$/;
        var regCode = /^[0-9]{6}$/;
        $('.btn_submit').click(function () {
            if ($('.name').val() == '') {
                alert('请填写姓名');
            } else if ($('.name').val().length >= 10) {
                alert('姓名不能大于10个中文字符');
            } else if ($('.phone').val() == "") {
                alert('请填写联系方式');
            } else if (!regPhone.test($('.phone').val())) {
                alert('请填写正确的手机号码');
            } else if ($('.proText').html() == '') {
                alert('请选择市/省份');
            } else if ($('.districtText').html() == '') {
                alert('请选择区/县');
            } else if ($('.code').val() == '') {
                alert('请填写邮编');
            } else if (!regCode.test($('.code').val())) {
                alert('请填写正确的邮编');
            } else if ($('.detailedText').val() == '') {
                alert('请填写详细地址');
            } else {
                console.log('成功')
                orderForm.username = $('.name').val();
                orderForm.phone = $('.phone').val();
                orderForm.postcode = $('.code').val();
                orderForm.location = $('.proText').html() + $('.districtText').html() + $('.detailedText').val();
                $('.info .username').html(orderForm.username);
                $('.info .phone').html(orderForm.phone);
                $('.info .code').html(orderForm.postcode);
                $('.info .site').html(orderForm.location);
                $('.orderForm').hide();
                $('.info').show();

            }
        });
        $('.info1 .btn_modify').click(function () {
            $('.orderForm').show().siblings().hide();
        })
        $('.info1 .btn_infoComfirm').click(function () {
            $.ajax({
                url: 'http://api8001.test/api/sc/order',
                type: 'POST',
                data: orderForm,
                success: function (res) {
                    if (res.status) {
                        $('.info2 .orderCode').html(res.id);
                        var info_content = $('#info_content')[0];
                        $('.infoImg').html('');
                        layer.msg('上传中....', {
                            time: 2000 //2秒关闭（如果不配置，默认是3秒）
                        });
                        var w = $('#info_content').width();
                        var h = $('#info_content').height();
                        var canvas = document.createElement('canvas');
                        canvas.style.width = w * 2 + "px";
                        canvas.style.height = h * 2 + "px";
                        var ctx = canvas.getContext("2d");
                        ctx.scale(2, 2);
                        html2canvas(info_content, {
                            onrendered: function (canvas) {
                                var image = canvas.toDataURL("image/png");
                                var pHtml = "<img src=" + image + " />";
                                $('.infoImg').html(pHtml);
                            }
                        });
                        setTimeout(function () {
                            $('.info1').hide();
                        }, 2000)
                    } else {
                        alert(res.reason);
                    }
                },
                error: function (res) {
                    alert('很抱歉，上传失败，请重新上传')
                }
            })
        })
        $('.info2 .btn span').click(function () {
            layer.msg('长按图片，保存到手机相册')
        })
    }

})();
