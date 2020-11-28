// CONSTANTS
export const lightGray = '#F5F5F5'
export const mediumGray = '#4B4B4B'
export const darkGray = '#242424'
export const darkGreen = '#013300'
export const lightGreen = '#084A07'
export const lightYellow = '#FFB64D'
export const darkYellow = '#BF770F'
export const darkRed = '#EB3223'
export const loghterGreen = '#499F13'
export const lightRed = '#F67E3A'
export const lightBlue = '#1E67B9'
export const darkBlue = '#1E67B9'

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
        marginLeft: -50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    Logo: {
        marginLeft: 5,
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


