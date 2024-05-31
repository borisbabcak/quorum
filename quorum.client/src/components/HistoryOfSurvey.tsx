import '../assets/Common.css';

function HistoryOfSurvey() {
    return (
        <div className="button-container">
            <div className="history-of-survey-button" onClick={() => window.location.href = '/history-of-survey'}>
               HISTORY OF SURVEY
            </div>
        </div>
    );
}

export default HistoryOfSurvey;
