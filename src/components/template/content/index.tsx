type ContentProps = {
 children: React.ReactNode
}

export const Content =({children}:ContentProps) => {
  return (
    <main>
    {children}
    </main>
  );
}