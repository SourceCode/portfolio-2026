import contentReducer, { setLoading } from './contentSlice';

describe('contentSlice', () => {
    it('should return initial state with populated content', () => {
        const state = contentReducer(undefined, { type: 'unknown' });

        expect(state.loading).toBe(false);
        expect(state.projects).toEqual(expect.any(Array));
        expect(state.blogPosts).toEqual(expect.any(Array));
        expect(state.career).toEqual(expect.any(Array));
        expect(state.aboutContent).toEqual(expect.any(Object));

        // Verify content is loaded
        expect(state.projects.length).toBeGreaterThan(0);
        expect(state.blogPosts.length).toBeGreaterThan(0);
        expect(state.career.length).toBeGreaterThan(0);
    });

    it('sets loading state correctly', () => {
        const initialState = contentReducer(undefined, { type: 'unknown' });
        const nextState = contentReducer(initialState, setLoading(true));
        expect(nextState.loading).toBe(true);

        const nextState2 = contentReducer(nextState, setLoading(false));
        expect(nextState2.loading).toBe(false);
    });

    it('contains valid static data structure', () => {
        const initialState = contentReducer(undefined, { type: 'unknown' });
        // This test iterates over all static data to ensure coverage and integrity
        expect(initialState.projects).toBeDefined();
        expect(initialState.projects.length).toBeGreaterThan(0);
        initialState.projects.forEach(project => {
            expect(project.id).toBeDefined();
            expect(project.title).toBeDefined();
            expect(project.tags).toBeInstanceOf(Array);
            project.tags.forEach(tag => expect(typeof tag).toBe('string'));
            project.tags.forEach(tag => expect(typeof tag).toBe('string'));
            expect(['boolean', 'undefined']).toContain(typeof project.featured);
        });

        expect(initialState.blogPosts).toBeDefined();
        initialState.blogPosts.forEach(post => {
            expect(post.slug).toBeDefined();
            expect(post.content).toBeDefined();
            expect(post.tags).toBeInstanceOf(Array);
            post.tags.forEach(tag => expect(typeof tag).toBe('string'));
        });

        expect(initialState.career).toBeDefined();
        initialState.career.forEach(item => {
            expect(item.company).toBeDefined();
            expect(item.role).toBeDefined();
            expect(item.period).toBeDefined();
        });

        expect(initialState.aboutContent).toBeDefined();
        expect(initialState.aboutContent.functionalExpertise).toBeInstanceOf(Array);
    });
});
