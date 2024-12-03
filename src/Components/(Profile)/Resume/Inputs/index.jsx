import { Select, styled, TextField, Autocomplete } from "@mui/material";

const CustomSelect = styled(Select)(({ theme }) => ({
    '&.MuiSelect-root': {
        backgroundColor: '#e3f2fd',
        border: '1px solid #90caf9',
        borderRadius: 4,
        '&:hover': {
            borderColor: '#64b5f6',
        },
        '&.Mui-disabled': {
            backgroundColor: '#f5f5f5',
        },
    },
    '& .MuiSelect-select': {
        padding: '12px 24px',
        fontSize: '1rem',
    },
    '& .MuiSelect-icon': {
        color: '#1976d2',
    },
    '& .MuiMenu-paper': {
        maxHeight: 250,
        overflow: 'auto',
    },
    '& .MuiMenuItem-selected': {
        backgroundColor: '#c8e6c9',
    },
    '& .MuiMenuItem-highlighted': {
        backgroundColor: '#fff59d',
    },
    '& .MuiDivider-root': {
        backgroundColor: '#b0bec5',
    },
    '& .MuiSelect-notchedOutline': {
        borderColor: '#90caf9',
    },
    '& .MuiInputBase-input': {
        padding: '12px',
        '&:focus': {
            borderColor: '#64b5f6',
        },
    },
}));


const StyledTextField = styled(TextField)({
    '& .MuiFormControl-root': {
    },
    '& .MuiOutlinedInput-root': {
    },
    '& .MuiOutlinedInput-notchedOutline': {
        height: "50px",
    }
});

const AutocompleteStyleDesign = styled(Autocomplete)(({ theme }) => ({
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#00b2a9", // Customize the active border color here
    },
    "& .InputLabelProps": {
        fontSize: "50px",
    },
    "& .MuiInputLabel-outlined.MuiInputLabel-shrink.Mui-focused": {
        color: "#000", // Customize the active label color here
    },
    borderRadius: "5px",
    "& .MuiOutlinedInput-root": {
        background: "#fff",
    },
    "& .MuiAutocomplete-inputRoot": {
        height: "45px", // Customize the height of the Autocomplete component here
    },
    "& .MuiInputLabel-root": {
        marginTop: "-2px",
        fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
        "& .MuiInputLabel-root": {
            fontSize: "14px",
        },
    },
    "& .MuiAutocomplete-input": {
        marginTop: "-5px",
    },
}));


export { CustomSelect, StyledTextField, AutocompleteStyleDesign };