import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function useMedia() {

    let breakPoint = 0;
    let breakPointName = "xs";

    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.up('xs'));
    const sm = useMediaQuery(theme.breakpoints.up('sm'));
    const md = useMediaQuery(theme.breakpoints.up('md'));
    const lg = useMediaQuery(theme.breakpoints.up('lg'));
    const xl = useMediaQuery(theme.breakpoints.up('xl'));

    if (xs){
        breakPoint = 0;
        breakPointName = "xs";
        if (sm){
            breakPoint = 1;
            breakPointName = "sm";
            if (md){
                breakPoint = 2;
                breakPointName = "md";
                if (lg){
                    breakPoint = 3;
                    breakPointName = "lg";
                    if (xl){
                        breakPoint = 4;
                        breakPointName = "xl";
                    }
                }
            }
        }
    }
    return { name: breakPointName, value: breakPoint };
}