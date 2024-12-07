module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'Generate a new React component with TSX, test, and storybook files',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the component name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
                templateFile: 'plop-templates/component.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
                templateFile: 'plop-templates/component.test.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
                templateFile: 'plop-templates/component.stories.tsx.hbs',
            },
        ],
    });
};
