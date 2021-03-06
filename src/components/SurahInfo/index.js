import React, { PropTypes } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const style = require('./style.scss');

const SurahInfo = ({ surah, isShowingSurahInfo, onClose }) => {
  // So we don't need to load images and files unless needed
  if (!isShowingSurahInfo) return <noscript />;

  const html = require(`./htmls/${surah.id}.html.js`); // eslint-disable-line global-require

  return (
    <Col xs={12} className={`${style.container} ${style.show}`}>
      <div
        className={`${style.close} ss-delete`}
        onClick={() => onClose({isShowingSurahInfo: !isShowingSurahInfo})}
      />
      <Row className={style.row}>
        <Col
          md={3}
          xs={6}
          className={`${style.bg} ${style[surah.revelation.place]}`}
        />
        <Col md={1} xs={6} className={style.list}>
          <dl>
            <dt>VERSES</dt>
            <dd className="text-uppercase">{surah.ayat}</dd>
            <dt>PAGES</dt>
            <dd className="text-uppercase">{surah.page.join('-')}</dd>
          </dl>
        </Col>
        <Col md={8} className={`${style.info} times-new`}>
          <div dangerouslySetInnerHTML={{__html: html}} />
          <div>
            <p>
              <em>
                Source: Sayyid Abul Ala Maududi - Tafhim al-Qur'an - The Meaning of the Quran
              </em>
            </p>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

SurahInfo.propTypes = {
  onClose: PropTypes.func,
  isShowingSurahInfo: PropTypes.bool,
  surah: PropTypes.object
};

export default SurahInfo;
