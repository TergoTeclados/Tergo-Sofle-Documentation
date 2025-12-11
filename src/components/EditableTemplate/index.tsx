import React, { useState } from 'react';
import styles from './styles.module.css';

interface EditableTemplateProps {
  defaultText: string;
  placeholder?: string;
}

export default function EditableTemplate({
  defaultText,
  placeholder = 'Preencha os campos acima com os resultados dos testes...',
}: EditableTemplateProps) {
  const [text, setText] = useState(defaultText);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.label}>Relatório de Testes</span>
        <button onClick={handleCopy} className={styles.copyButton}>
          {copied ? '✓ Copiado!' : '📋 Copiar'}
        </button>
      </div>
      <textarea
        className={styles.textarea}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        rows={20}
      />
    </div>
  );
}

