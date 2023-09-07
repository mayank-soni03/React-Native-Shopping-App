import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    BGImage: {
        width: '100%',
        position: 'absolute',
        top: 0,
        height: '50%',
    },
    SafeAV: {
        flex: '1',
    },
    SafeView1: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',

    },
    UserIcon: {
        height: '100%',
        width: '100%',
        marginRight: '80%',
        marginLeft: 5,
        marginTop: 5
    },
    SafeText2: {
        marginLeft: 130,
        fontSize: '200%',
        textAlign: 'center',
        fontWeight: '700',
        position: 'absolute',
        letterSpacing: 2,
        marginTop: 2,
    },
    BellIcon: {
        width: '90%',
        height: '90%',
        marginRight: 5,
        marginTop: 5
    },
    SafeView2: {
        marginLeft: '20px',
        marginRight: '20px',
        marginTop: '56px'
    },
    SafeView3: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 50,
        padding: '4px',
        color: 'grey',
        backgroundColor: 'lightgrey',
        alignItems: 'center'
    },

    TextInput: {
        padding: '12px',
        flex: 1,
        fontSize: 18,
        fontWeight: 600,
        borderRadius: 50,
    },
    TextInput2: {
        marginLeft: '20px',
        marginRight: '20px',
        marginTop: '50px',
        fontWeight: 700,
        letterSpacing: 2,
        fontSize: 15,
    },
    MagnifyingGlass: {
        borderRadius: 50,
        padding: 10,
        backgroundColor: 'brown'
    },
    SafeText3: {
        fontSize: '150%',
        fontWeight: '500',
        borderRadius: 25,
        backgroundColor: 'grey',

        marginTop: '20px',
        borderWidth: '1px',
        padding: '2%'
    },
    SafeView4: {
        flexDirection: 'row',
        borderRadius: 50,
        padding: '8px',
    },
    SafeView5: {
        marginTop: '10px',
        paddingTop: '8px',
        paddingBottom: '8px',

    }
});

export default styles