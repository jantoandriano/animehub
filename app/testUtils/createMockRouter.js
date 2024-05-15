// test-utils/createMockRouter.ts
import '@testing-library/jest-dom'

export const createMockRouter = (router) => {
    return {
        basePath: '',
        pathname: '/',
        route: '/',
        asPath: '/',
        query: {},
        push: jest.fn(),
        replace: jest.fn(),
        reload: jest.fn(),
        back: jest.fn(),
        prefetch: jest.fn().mockResolvedValue(undefined),
        beforePopState: jest.fn(),
        events: {
            on: jest.fn(),
            off: jest.fn(),
            emit: jest.fn(),
        },
        isFallback: false,
        ...router,
    };
};
