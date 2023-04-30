import { ImgHTMLAttributes, useMemo } from 'react';

export default function TechStack(
  props: ImgHTMLAttributes<any> & { techNames: string[] }
) {
  const url = useMemo(() => {
    return `https://skillicons.dev/icons?i=${props.techNames.join(',')}`;
  }, [props.techNames]);

  return <img className={props.className + ' max-w-full'} alt="" src={url} />;
}
