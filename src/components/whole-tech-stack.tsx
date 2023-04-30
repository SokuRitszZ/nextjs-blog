import TechStack from './tech-stack';

export default function WholeTechStack() {
  return (
    <>
      <p>
        <div> Language & Framework </div>
        <TechStack
          techNames={[
            'ts',
            'nodejs',
            'electron',
            'react',
            'nextjs',
            'vue',
            'nuxtjs',
            'svelte',
            'angular',
          ]}
        />
        <TechStack
          techNames={[
            'solidjs',
            'nestjs',
            'tailwind',
            'java',
            'spring',
            'python',
            'django',
            'flask',
          ]}
        />
        <div> Tools </div>
        <TechStack
          techNames={[
            'vscode',
            'vim',
            'idea',
            'vite',
            'webpack',
            'jest',
            'git',
            'mysql',
            'sqlite',
          ]}
        />
        <TechStack techNames={['redis', 'docker']} />
        <div> Learning or To Learn</div>
        <TechStack techNames={['cpp', 'rust', 'rxjs', 'deno', 'graphql']} />
      </p>
    </>
  );
}
