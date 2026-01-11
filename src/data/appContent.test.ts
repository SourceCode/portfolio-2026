import { staticContent } from './appContent';

describe('AppConfig Data', () => {
    it('staticContent should be a non-empty array', () => {
        expect(Array.isArray(staticContent)).toBe(true);
        expect(staticContent.length).toBeGreaterThan(0);
    });

    it('each content item should have required fields', () => {
        staticContent.forEach((item, index) => {
            expect(item).toHaveProperty('id');
            expect(item).toHaveProperty('title');
            expect(item).toHaveProperty('summary');
            expect(item).toHaveProperty('path');
            expect(item).toHaveProperty('tags');

            expect(typeof item.id).toBe('string');
            expect(typeof item.title).toBe('string');
            expect(Array.isArray(item.tags)).toBe(true);

            // Check for duplicate IDs which could break lists
            const duplicateIdCheck = staticContent.filter(i => i.id === item.id);
            if (duplicateIdCheck.length > 1) {
                console.error(`Duplicate ID found: ${item.id} at index ${index}`);
            }
            expect(duplicateIdCheck.length).toBe(1);
        });
    });

    it('should have valid categories', () => {
        const validCategories = ['Expertise', 'Other', 'Working Style'];
        staticContent.forEach(item => {
            expect(validCategories).toContain(item.category);
        });
    });
});
