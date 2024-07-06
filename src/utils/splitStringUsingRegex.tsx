export const SplitStringUsingRegex = (inputString:string): string[] => {

    const characters : string[] = [];
    const regex = /[\s\S]/gu;

    let match : RegExpExecArray | null;

    while ((match = regex.exec(inputString)) != null) {
        characters.push(match[0])
    }
    return characters
}