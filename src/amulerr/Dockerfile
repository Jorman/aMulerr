FROM ghcr.io/pnpm/pnpm:11
ENV AMULE_HOST=
ENV AMULE_PORT=
ENV AMULE_PWD=
RUN pnpm runtime set node 26 -g
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
ENV CI=true
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build
ARG IMG_VER
ENV IMG_VER=${IMG_VER}
ENTRYPOINT ["node", ".output/server/index.mjs"]
HEALTHCHECK --interval=20s CMD curl -f http://localhost:3000/health || exit 1
