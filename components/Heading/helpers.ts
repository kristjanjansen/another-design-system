// Utility function to determine the default HTML tag
export function getDefaultTag(variant: string): string {
    switch (variant) {
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
        case 'p':
        case 'ol':
        case 'ul':
            return variant;
        case 'line':
            return 'p';
        case 'list':
            return 'ol';
        default:
            return 'div';
    }
}
