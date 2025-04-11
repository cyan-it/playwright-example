
export function assert(condition: boolean, errorMessage: string) {
        if (condition) {
            return {
                message: () => "passed",
                pass: true,
            };
        } else {
            return {
                message: () => errorMessage,
                pass: false,
            };
        }
    }

