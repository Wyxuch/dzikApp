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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 20,
        },
        shadowOpacity: 1,
        shadowRadius: 2.22,
        elevation: 4,
    },
    TopNav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: darkGreen,
        height: 56,
    },
    NavTitle: {
        color: lightGray,
        fontWeight: 'bold',
        fontSize: 36
    }
}


export default style
