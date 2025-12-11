import React from 'react';
import styles from './styles.module.css';

interface YouTubeVideoProps {
  videoId: string;
  title?: string;
  embed?: boolean;
  showLink?: boolean;
}

/**
 * Componente reutilizável para exibir vídeos do YouTube
 * 
 * @param videoId - ID do vídeo do YouTube (ex: "jODsPcJ7b0g" de https://youtu.be/jODsPcJ7b0g)
 * @param title - Título opcional para o vídeo
 * @param embed - Se true, mostra o vídeo embutido. Se false, mostra apenas link com ícone
 * @param showLink - Se true, mostra link de texto abaixo do vídeo/ícone
 */
export default function YouTubeVideo({
  videoId,
  title,
  embed = false,
  showLink = true,
}: YouTubeVideoProps) {
  const youtubeUrl = `https://youtu.be/${videoId}`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className={styles.container}>
      {embed ? (
        <div className={styles.embedWrapper}>
          <iframe
            width="560"
            height="315"
            src={embedUrl}
            title={title || 'Vídeo do YouTube'}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.iframe}
          ></iframe>
        </div>
      ) : (
        <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
          <img 
            src="/Tergo-Sofle-Documentation/img/youtube-icon.png" 
            alt={title || 'Assistir no YouTube'} 
            className={styles.icon}
          />
        </a>
      )}
      {showLink && (
        <div className={styles.linkText}>
          <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
            {title ? `${title} - Veja no YouTube` : 'Veja no YouTube'}
          </a>
        </div>
      )}
    </div>
  );
}

