// CONSTANTS
const lightGray = '#F5F5F5'
const mediumGray = '#4B4B4B'
const darkGray = '#242424'
const darkGreen = '#013300'
const lightGreen = '#084A07'
const lightYellow = 'FFB64D'
const darkYellow = 'BF770F'
const darkRed = 'EB3223'
const loghterGreen = '499F13'
const lightRed = 'F67E3A'
const lightBlue = '1E67B9'
const darkBlue = '1E67B9'

const style = {
    Main: {
        flex: 1,
        backgroundColor: lightGray,
    },
    Shadow: {
        margin: -3,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 20,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2.22,
        zIndex: 200,
    },
    TopNav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: darkGreen,
        height: 56,
    },
    LogoWrapper:{
        marginRight: -50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    Logo: {
        height: 30,
        width: 50,
    },
    NavTitle: {
        fontFamily: 'fredoka',
        color: lightGray,
        fontSize: 38,
    },
    MenuButton: {

    }
}


export default style
