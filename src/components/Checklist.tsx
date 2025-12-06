import { useState } from "react";
import { useStickyState } from "../hooks/useStickyState";
import { checklistData } from "../data/checklistData";

export default function Checklist() {
  // Estado para controlar a visibilidade do modal
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const [checkedItems, setCheckedItems] = useStickyState<Record<string, boolean>>(
    {},
    "checklist-v2"
  );

  const allQuestions = checklistData.flatMap((w) => w.questions);
  const totalCount = allQuestions.length;
  const completedCount = Object.keys(checkedItems).filter((k) => checkedItems[k]).length;
  const percentage = Math.round((completedCount / totalCount) * 100) || 0;

  const toggleItem = (item: string) => {
    setCheckedItems((prev: Record<string, boolean>) => {
      const newState = { ...prev };
      if (newState[item]) {
        delete newState[item];
      } else {
        newState[item] = true;
      }
      return newState;
    });
  };

  // Função chamada ao clicar em "Confirmar" no modal
  const confirmReset = () => {
    setCheckedItems({});
    setIsResetModalOpen(false);
  };

  return (
    <div className="checklist-root">
      <header className="checklist-header">
        <div>
          <h1 className="title">LeetCode Tracker</h1>
          <div className="stats">
            {percentage}% Concluído — {completedCount}/{totalCount} desafios
          </div>
        </div>

        <div className="header-controls">
          <div className="progress-container" aria-label="Progresso geral">
            <div className="progress-fill" style={{ width: `${percentage}%` }} />
          </div>
          
          {/*Em vez de resetar direto, abrir o modal */}
          <button onClick={() => setIsResetModalOpen(true)} className="btn-reset">
            Resetar
          </button>
        </div>
      </header>

      <main className="weeks-wrapper">
        {checklistData.map((week) => (
          <section key={week.id} className="week-card">
            <h2 className="week-title">{week.title}</h2>
            <div className="items-grid">
              {week.questions.map((question) => {
                const isChecked = !!checkedItems[question];
                return (
                  <label key={question} className="checkbox-label">
                    <input
                      type="checkbox"
                      className="checkbox-input"
                      checked={isChecked}
                      onChange={() => toggleItem(question)}
                    />
                    <span className="item-text">{question}</span>
                  </label>
                );
              })}
            </div>
          </section>
        ))}
      </main>

      {/* --- CÓDIGO DO MODAL AQUI --- */}
      {isResetModalOpen && (
        <div className="modal-overlay" onClick={() => setIsResetModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">Tem certeza?</h3>
            <p className="modal-text">
              Isso apagará todo o seu progresso atual. Essa ação não pode ser desfeita.
            </p>
            <div className="modal-actions">
              <button 
                className="btn-cancel" 
                onClick={() => setIsResetModalOpen(false)}
              >
                Cancelar
              </button>
              <button 
                className="btn-confirm" 
                onClick={confirmReset}
              >
                Sim, Resetar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}