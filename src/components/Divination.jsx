import React from 'react'
import ReactDOM from 'react-dom'
import DivinationTitle from "Source/components/DivinationTitle"
import DivinationForm from "Source/components/DivinationForm"
import Color from "Source/components/Color"


class Divination extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            title: '今日幸運色',
            firstDivinate: true,
            loading: false,
            colors: [{
                name: 'Ultra Violet',
                nameChinese: '紫外光',
                code: '#5E4B88',
                year: '2018'
            }, {
                name: 'Greenery',
                nameChinese: '草木綠',
                code: '#93B755',
                year: '2017'
            }, {
                name: 'Rose Quartz',
                nameChinese: '玫瑰粉晶',
                code: '#F7CAC9',
                year: '2016'
            }, {
                name: 'Serenity',
                nameChinese: '寧靜粉藍',
                code: '#92A8D1',
                year: '2016'
            }, {
                name: 'Marsala',
                nameChinese: '瑪薩拉酒紅',
                code: '#925153',
                year: '2015'
            }, {
                name: 'Radiant Orchid',
                nameChinese: '璀璨紫蘭花',
                code: '#AB5E96',
                year: '2014'
            }, {
                name: 'Emerald',
                nameChinese: '翡翠綠',
                code: '#4E9C7A',
                year: '2013'
            }, {
                name: 'Tangerine Tango',
                nameChinese: '探戈橘',
                code: '#E85448',
                year: '2012'
            }, {
                name: 'Honeysuckle',
                nameChinese: '忍冬紅(金銀花)',
                code: '#D85171',
                year: '2011'
            }, {
                name: 'Turquoise',
                nameChinese: '松石綠',
                code: '#57B3A8',
                year: '2010'
            }, {
                name: 'Mimosa',
                nameChinese: '含羞草黃',
                code: '#ECBB5E',
                year: '2009'
            }, {
                name: 'Blue Iris',
                nameChinese: '鳶尾藍',
                code: '#59609C',
                year: '2008'
            }, {
                name: 'Chill Pepper',
                nameChinese: '辣椒紅',
                code: '#952835',
                year: '2007'
            }, {
                name: 'Sand Dollar',
                nameChinese: '沙色金幣',
                code: '#DFCDC2',
                year: '2006'
            }, {
                name: 'Blue Turquoise',
                nameChinese: '藍綠松石',
                code: '#57AFAB',
                year: '2005'
            }, {
                name: 'Tigerlily',
                nameChinese: '虎皮百合',
                code: '#E05B49',
                year: '2004'
            }, {
                name: 'Aqua Sky',
                nameChinese: '水色天空',
                code: '#80C6C4',
                year: '2003'
            }, {
                name: 'True Red',
                nameChinese: '真實紅',
                code: '#BE353D',
                year: '2002'
            }, {
                name: 'Fuchsia Rose',
                nameChinese: '桃紅玫瑰',
                code: '#C44877',
                year: '2001'
            }, {
                name: 'Cerulean',
                nameChinese: '蔚藍',
                code: '#9FB7D4',
                year: '2000'
            }],
            color: {
                name: 'Default',
                nameChinese: '預設',
                code: '#F8F8FF',
                year: '0000'
            }
        }

        this.divinateColor = this.divinateColor.bind(this)
    }

    divinateColor() {
        var colorIndex = Math.floor(Math.random()*this.state.colors.length)
        var oldColor = this.state.color.code
        var newColor = this.state.colors[colorIndex]

        this.setState({
            loading: true
        })

        setTimeout(function(){
            if(this.state.firstDivinate == true){
                this.setState({
                    loading: false,
                    firstDivinate: false,
                    color: newColor
                })
            }else{
                this.setState({
                    loading: false,
                    color: newColor
                })
            }
            //document.body.style.backgroundColor = newColor.code
            document.body.style.cssText = 'background: '+newColor.code
        }.bind(this), 1000)
    }

    render() {
        var LuckyColor
        if (this.state.color.name != 'Default') {
            LuckyColor = <Color color={this.state.color} />
        }
        return (
            <div>
                <div className='ui middle aligned center aligned grid main'>
                    <div className='four wide column main-block'>
                        <DivinationTitle title={this.state.title}/>
                        {LuckyColor}
                        <DivinationForm divinateColor={this.divinateColor} loading={this.state.loading} firstDivinate={this.state.firstDivinate} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Divination