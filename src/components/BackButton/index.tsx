import { Container } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from 'styled-components';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

interface BackButtonProps extends BorderlessButtonProps {
    color?: string;
}

export function BackButton({ color, ...rest }: BackButtonProps) {
    const theme = useTheme();

    return (
        <Container {...rest}>
            <MaterialIcons
                name="chevron-left"
                size={24}
                color={color ? color : theme.colors.text}
            />
        </Container>
    )
}