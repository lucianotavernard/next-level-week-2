import React, { useState, useCallback, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import Input from '../../components/Input';

import { Container, Content } from './styles';

const TeacherForm: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from: '',
      to: '',
    },
  ]);

  const addNewScheduleItem = useCallback(() => {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: '',
        to: '',
      },
    ]);
  }, [scheduleItems]);

  const setScheduleItemValue = useCallback(
    (position: number, field: string, value: string) => {
      const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
        if (index === position) {
          return {
            ...scheduleItem,
            [field]: value,
          };
        }

        return scheduleItem;
      });

      setScheduleItems(updateScheduleItems);
    },
    [scheduleItems],
  );

  const handleCreateClass = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      api
        .post('classes', {
          name,
          avatar,
          whatsapp,
          bio,
          subject,
          cost: Number(cost),
          schedule: scheduleItems,
        })
        .then(() => {
          alert('Cadastro realizado com sucesso!');

          history.push('/');
        })
        .catch(() => alert('Erro no cadastro!'));
    },
    [avatar, bio, cost, history, name, scheduleItems, subject, whatsapp],
  );

  return (
    <Container>
      <PageHeader
        title="Que incr??ve que voc?? quer dar aulas."
        description="O primeiro passo ?? preencher esse formul??rio de incri????o"
      />

      <Content>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus Dados</legend>

            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={e => setAvatar(e.target.value)}
            />
            <Input
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />
            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={e => setBio(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name="subject"
              label="Mat??ria"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ci??ncias', label: 'Ci??ncias' },
                { value: 'Educa????o f??sica', label: 'Educa????o f??sica' },
                { value: 'F??sica', label: 'F??sica' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'Hist??ria', label: 'Hist??ria' },
                { value: 'Matem??rica', label: 'Matem??rica' },
                { value: 'Portugu??s', label: 'Portugu??s' },
                { value: 'Qu??mica', label: 'Qu??mica' },
              ]}
            />
            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={e => setCost(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Hor??rios dispon??veis
              <button type="button" onClick={addNewScheduleItem}>
                {' '}
                + novo hor??rio
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    value={scheduleItem.week_day}
                    onChange={e =>
                      setScheduleItemValue(index, 'week_day', e.target.value)
                    }
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda' },
                      { value: '2', label: 'Ter??a' },
                      { value: '3', label: 'Quarta' },
                      { value: '4', label: 'Quinta' },
                      { value: '5', label: 'Sexta' },
                      { value: '6', label: 'S??bado' },
                    ]}
                  />
                  <Input
                    name="from"
                    label="Das"
                    type="time"
                    value={scheduleItem.from}
                    onChange={e =>
                      setScheduleItemValue(index, 'from', e.target.value)
                    }
                  />
                  <Input
                    name="to"
                    label="At??"
                    type="time"
                    value={scheduleItem.to}
                    onChange={e =>
                      setScheduleItemValue(index, 'to', e.target.value)
                    }
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>

            <button type="submit"> Salvar cadastro </button>
          </footer>
        </form>
      </Content>
    </Container>
  );
};

export default TeacherForm;
