import React from 'react'
import { ExternalLink, Paragraph, Section } from './styles'
export default function FilmSynopsis () {
  return (
    <Section>
      <Paragraph>
        <em>&quot;TALES FROM THE <a href='https://talesfromthetrap.com/'> TRAP</a>&quot;</em> is a gritty no holds
        barred look inside the World faced today by many
        youths growing up on UK Streets and Council Estates.
        Tales of Gang Culture, Fashion, Music, Knife &amp;
        Gun Crime, County Lines Drug Deals, however
        more than that <em>&quot;TALES FROM THE <a href='https://talesfromthetrap.com/'> TRAP</a>&quot;</em> is
        a story of Friendship and Loyalty that runs
        deeper than any Family.
      </Paragraph>

      <ExternalLink
        href='https://talesfromthetrap.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <p>
          <strong>
            Read more
          </strong>
        </p>
      </ExternalLink>

    </Section>
  )
}
